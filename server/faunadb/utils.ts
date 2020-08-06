import { Client, query as q } from "faunadb";
import { Collection } from "server/faunadb/collection";
import { InternalServerError } from "common/http";

export async function createDocument<T>(
  db: Client,
  collection: typeof Collection[keyof typeof Collection],
  data: T
) {
  const result = await db.query<any>(
    q.Call(q.Function("create_with_autoincrement"), collection, data)
  );

  const id = Number(result);
  if (!Number.isInteger(id)) {
    throw new InternalServerError();
  }

  return id;
}

export function createDbClient() {
  const secret = process.env.FAUNA_DB_SECRET;

  if (!secret) {
    throw new InternalServerError();
  }

  return new Client({
    secret,
    keepAlive: false,
    timeout: Number(process.env.FAUNA_DB_TIMEOUT) ?? 5,
  });
}
