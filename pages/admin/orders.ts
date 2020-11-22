import { OrdersPage, IProps, TOrderRow } from "components/OrdersPage";
import { GetServerSideProps } from "next";
import { createDbClient, Index } from "server/faunadb";
import { query as q } from "faunadb";
import { getTotalPrice } from "common/data/cart";
import { getDeliveryCost } from "common/data/price";

export default OrdersPage;

function getStringOrPlaceholder(value: any): string {
  return value ? String(value) : "-";
}

function getStringOrNull(value: any): string | null {
  return typeof value === "string" ? value : null;
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
      }: any): TOrderRow => {
        const cart = {
          countById: countById ?? {},
        };
        const totalPrice = getTotalPrice(cart);
        const deliveryCost = getDeliveryCost(totalPrice);
        const sum = totalPrice + deliveryCost;

        return {
          id: Number(id),
          dateIsoString: date?.date.toISOString(),

          name: getStringOrPlaceholder(name),
          phone: getStringOrPlaceholder(phone),
          address: getStringOrPlaceholder(address),

          entrance: getStringOrNull(entrance),
          apartment: getStringOrNull(apartment),
          intercomCode: getStringOrNull(intercomCode),
          floor: getStringOrNull(floor),

          cart,
          sum,
        };
      }
    ),
  };

  return { props };
};
