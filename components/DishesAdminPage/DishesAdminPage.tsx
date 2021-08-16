import React from "react";
import { Anchor, Box, CheckBox, DataTable } from "grommet";

import { itemsWithDeleted } from "common/data/menu";

export const DishesAdminPage = () => {
  return (
    <Box margin={{ vertical: "large" }}>
      <h1>Список блюд</h1>
      <DataTable
        sortable
        resizeable
        columns={[
          {
            property: "id",
            header: "№",
            primary: true,
          },
          {
            property: "title",
            header: "Название",
            render: ({ id, title }) => (
              <Anchor target="_blank" href={`/dish/${id}`}>
                {title}
              </Anchor>
            ),
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
            header: "Штук",
          },
          {
            property: "deleted",
            header: "Удалено",
            render: ({ deleted }) => <CheckBox disabled checked={deleted} />,
          },
          {
            property: "hasImage",
            header: "Картинка",
            render: ({ hasImage }) => <CheckBox disabled checked={hasImage} />,
          },
        ]}
        data={itemsWithDeleted.map(({ image, deleted, ...rest }) => ({
          ...rest,
          hasImage: image !== "empty.jpg",
          deleted: Boolean(deleted),
        }))}
      />
    </Box>
  );
};

DishesAdminPage.commonPageProps = {
  disableHeader: true,
  disableMenu: true,
  noIndex: true,
};
