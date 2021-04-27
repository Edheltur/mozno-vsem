import React from "react";
import { SoldPage } from "components/SoldPage";
import { GetServerSideProps } from "next";
import { createDbClient, Index } from "server/faunadb";
import { query as q } from "faunadb";
import { getSession } from "next-auth/client";

export default SoldPage;

export const getServerSideProps: GetServerSideProps<
  React.ComponentProps<typeof SoldPage>
> = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return { props: {} };
  }

  const rawDays = context.query["days"];
  const days = Number.isFinite(Number(rawDays)) ? Number(rawDays) : 30;

  const db = createDbClient();

  const { data } = await db.query<any>(
    q.Reduce(
      q.Lambda((acc, value) =>
        q.Merge(acc, value, (_, accValue, orderValue) =>
          q.Add(q.If(q.IsNull(accValue), 0, accValue), orderValue)
        )
      ),
      {},
      q.Map(
        q.Filter(
          q.Paginate(q.Match(q.Index(Index.ordersByDate)), { size: 10000 }),
          (date, _) => q.GTE(date, q.TimeSubtract(q.Now(), days, "days"))
        ),
        (_, ref) => q.Select(["data", "countById"], q.Get(ref))
      )
    )
  );

  const props = {
    ordersCountByDishId: data[0],
    days,
  };

  return { props };
};
