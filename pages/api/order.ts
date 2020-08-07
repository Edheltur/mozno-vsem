import { responseWithData } from "server/helpers/response";
import { BadRequestError, HttpStatus } from "common/http";
import { query as q } from "faunadb";
import { Collection, createDbClient, createDocument } from "server/faunadb";
import { createHandler } from "server/helpers/handlers";
import { isInteger, isMenuItemId, isObject } from "common/validators";
import { TApiResponseResult } from "common/api";
import { createTelegramReporter } from "server/telegram";

export type TOrdersEndpoint = {
  POST: TApiResponseResult<{ orderId: number }>;
};

export default createHandler<TOrdersEndpoint>({
  POST: async (req, res) => {
    const { countById } = req.body;

    if (!isObject(countById, isMenuItemId, isInteger)) {
      throw new BadRequestError();
    }

    const data = {
      date: q.Now(),
      countById,
    };

    const db = createDbClient();
    const reporter = createTelegramReporter();

    const orderId = await createDocument(db, Collection.orders, data);

    await reporter.sendReport(orderId, { countById });
    return responseWithData(res, HttpStatus.CREATED, { orderId });
  },
});
