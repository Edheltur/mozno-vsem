import React from "react";
import { Anchor, Box, DataTable } from "grommet";

import { items, TMenuItem } from "common/data/menu";

export const DishesAdminPage = () => {
  return (
    <Box margin={{ vertical: "large" }}>
      <h1>Список блюд</h1>
      <DataTable<TMenuItem>
        sortable
        resizeable
        columns={[
          {
            property: "id",
            header: "№",
            primary: true,
            render: ({ id }) => (
              <Anchor target="_blank" href={`/dish/${id}`}>
                {id}
              </Anchor>
            ),
          },
          {
            property: "title",
            header: "Название",
          },
          {
            property: "price",
            header: "Цена",
          },
          {
            property: "weight",
            header: "Вес",
          },
          {
            property: "amount",
            header: "Кол-во",
          },
        ]}
        data={items.slice()}
      />
    </Box>
  );
};

DishesAdminPage.commonPageProps = {
  disableHeader: true,
  disableMenu: true,
  noIndex: true,
};
