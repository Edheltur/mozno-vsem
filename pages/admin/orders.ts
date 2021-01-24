import React from "react";
import { OrdersPage } from "components/OrdersPage";
import { GetServerSideProps } from "next";
import { createDbClient, Index } from "server/faunadb";
import { query as q } from "faunadb";
import { getTotalPrice } from "common/data/cart";
import { getDeliveryCost } from "common/data/price";
import { getSession } from "next-auth/client";
import { getClientInfo } from "common/data/clientInfo";

export default OrdersPage;

export const getServerSideProps: GetServerSideProps<React.ComponentProps<
  typeof OrdersPage
>> = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return { props: {} };
  }

  const db = createDbClient();

  const { data } = await db.query<any>(
    q.Map(
      q.Paginate(q.Match(q.Index(Index.ordersByDate)), { size: 20 }),
      q.Lambda(["date", "ref"], q.Get(q.Var("ref")))
    )
  );

  const props = {
    orders: data.map(
      ({ data: { date, countById, ...rawClientInfo }, ref: { id } }: any) => {
        const cart = {
          countById: countById ?? {},
        };
        const totalPrice = getTotalPrice(cart);
        const deliveryCost = getDeliveryCost(totalPrice);
        const sum = totalPrice + deliveryCost;

        return {
          id: Number(id),
          dateIsoString: date?.date.toISOString(),
          clientInfo: getClientInfo(rawClientInfo),
          cart,
          sum,
        };
      }
    ),
  };

  return { props };
};
