import { OrdersPage, IProps, TOrderRow } from "components/OrdersPage";
import { GetServerSideProps } from "next";
import { createDbClient, Index } from "server/faunadb";
import { query as q } from "faunadb";

export default OrdersPage;

function getOptionalString(value: any): string {
  return value ? String(value) : "-";
}

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  const db = createDbClient();

  const { data } = await db.query<any>(
    q.Map(
      q.Paginate(q.Match(q.Index(Index.ordersByDate)), { size: 20 }),
      q.Lambda(["date", "ref"], q.Get(q.Var("ref")))
    )
  );

  const props: IProps = {
    orders: data.map(
      ({
        data: {
          date,
          name,
          phone,
          countById,
          address,
          entrance,
          apartment,
          intercomCode,
          floor,
        },
        ref: { id },
      }: any): TOrderRow => ({
        id: Number(id),
        dateIsoString: date?.date.toISOString(),
        name: getOptionalString(name),
        phone: getOptionalString(phone),
        cart: {
          countById: countById ?? {},
        },
        address: getOptionalString(address),
        entrance: getOptionalString(entrance),
        apartment: getOptionalString(apartment),
        intercomCode: getOptionalString(intercomCode),
        floor: getOptionalString(floor),
      })
    ),
  };

  return { props };
};
