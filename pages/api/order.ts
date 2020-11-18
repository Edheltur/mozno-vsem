import { responseWithData } from "server/helpers/response";
import { BadRequestError, HttpStatus } from "common/http";
import { query as q } from "faunadb";
import { Collection, createDbClient, createDocument } from "server/faunadb";
import { createHandler } from "server/helpers/handlers";
import { TApiResponseResult } from "common/api";
import { createTelegramReporter } from "server/telegram";
import { isOrder } from "common/data/order";
import { mapObject } from "common/utils/object";
import { User } from "common/data/user";

export type TOrdersEndpoint = {
  POST: TApiResponseResult<{ orderId: number }>;
};

export default createHandler<TOrdersEndpoint>({
  POST: async (req, res) => {
    const order = req.body;

    if (!isOrder(order)) {
      throw new BadRequestError();
    }

    const user = mapObject(User, (key) => order.user[key]);
    const data = {
      date: q.Now(),
      countById: order.cart.countById,
      ...user,
    };

    const db = createDbClient();
    const reporter = createTelegramReporter();

    const orderId = await createDocument(db, Collection.orders, data);

    await reporter.sendReport(orderId, order);
    return responseWithData(res, HttpStatus.CREATED, { orderId });
  },
});
