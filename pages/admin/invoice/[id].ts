import { InvoicePage } from "components/InvoicePage";
import { GetServerSideProps } from "next";
import React from "react";
import { createDbClient, Collection } from "server/faunadb";
import { query as q } from "faunadb";
import { getSession } from "next-auth/client";
import { isString } from "common/validators";
import { getClientInfo } from "common/data/clientInfo";

export default InvoicePage;

export const getServerSideProps: GetServerSideProps<React.ComponentProps<
  typeof InvoicePage
>> = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }

  const db = createDbClient();
  const id = context.params?.id;
  if (!isString(id)) {
    return { props: {} };
  }
  const {
    data: { countById, ...rawClientInfo },
  } = await db.query<any>(q.Get(q.Ref(q.Collection(Collection.orders), id)));

  const cart = {
    countById: countById ?? {},
  };
  const props = {
    id: Number(id),
    clientInfo: getClientInfo(rawClientInfo),
    cart,
  };

  return { props };
};
