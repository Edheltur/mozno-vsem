import { StatusCodes } from "http-status-codes";
import { query as q } from "faunadb";

import { TApiResponseResult } from "common/api";
import { BadRequestError } from "common/http";
import { isOrder } from "common/data/order";
import { mapObject } from "common/utils/object";
import { User } from "common/data/user";

import { responseWithData } from "server/helpers/response";
import { createTelegramReporter } from "server/telegram";
import { Collection, createDbClient, createDocument } from "server/faunadb";
import { createHandler } from "server/helpers/handlers";

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
    return responseWithData(res, StatusCodes.CREATED, { orderId });
  },
});
