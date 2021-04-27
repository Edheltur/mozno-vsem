import React from "react";
import Head from "next/head";
import Error from "next/error";
import { Anchor, ColumnConfig, DataTable, Heading } from "grommet";

import { isMenuItemId, itemsById, TMenuItemId } from "common/data/menu";

type IProps =
  | {}
  | {
      ordersCountByDishId: Record<string, number>;
      days: number;
    };

type RowType = {
  title: string;
  id: string;
  soldCount: number;
  soldSum: number;
};

const columns: ColumnConfig<RowType>[] = [
  {
    property: "id",
    header: "ID",
    primary: true,
    footer: "Итого",
  },
  {
    property: "title",
    header: "Название",
    render({ id, title }) {
      return (
        <Anchor href={`/dish/${id}`} target="_blank">
          {title}
        </Anchor>
      );
    },
  },
  {
    property: "soldCount",
    header: "Кол-во",
    units: "шт",
    aggregate: "sum",
    footer: { aggregate: true },
  },
  {
    property: "soldSum",
    header: "Выручка",
    units: "₽",
    aggregate: "sum",
    footer: { aggregate: true },
  },
];
export const SoldPage = (props: IProps) => {
  if (!("ordersCountByDishId" in props)) {
    return <Error statusCode={404} />;
  }
  const { days, ordersCountByDishId } = props;

  const data = Object.entries(ordersCountByDishId)
    .filter(([id]) => isMenuItemId(id))
    .map(([id, soldCount]) => {
      const { title, price } = itemsById[id as TMenuItemId];
      return { title, id, soldCount, soldSum: soldCount * price };
    });
  return (
    <>
      <Head>
        <title>Админка. Продано за {days} дней</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Heading level="2">Продано за {days} дней</Heading>
      <DataTable sortable columns={columns} data={data} />
    </>
  );
};

SoldPage.commonPageProps = {
  disableHeader: true,
  disableMenu: true,
  noIndex: true,
};
