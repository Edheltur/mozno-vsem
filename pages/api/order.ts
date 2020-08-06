import { responseWithData } from "server/helpers/response";
import { BadRequestError, HttpStatus } from "common/http";
import { query as q } from "faunadb";
import { createDbClient, createDocument } from "server/faunadb/utils";
import { Collection } from "server/faunadb/collection";
import { createHandler } from "server/helpers/handlers";
import { isInteger, isMenuItemId, isObject } from "common/validators";
import { TApiResponseResult } from "common/api";

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
    const orderId = await createDocument(db, Collection.orders, data);

    return responseWithData(res, HttpStatus.CREATED, { orderId });
  },
});
