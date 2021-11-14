import React, { useState } from "react";
import { Anchor, Box, CheckBox, DataTable, CheckBoxGroup } from "grommet";

import { itemsWithDeleted, items } from "common/data/menu";
import { CheckBoxType } from "grommet/components/CheckBoxGroup";

const FilterOptions: CheckBoxType[] = [
  {
    name: "with-deleted",
    value: "with-deleted",
    label: "Включая удалённые",
    defaultChecked: true,
  },
];

export const DishesAdminPage = () => {
  const [filters, setFilters] = useState(["with-deleted"]);
  const withDeleted = filters.includes("with-deleted");

  const data = withDeleted ? itemsWithDeleted : items;

  return (
    <Box margin={{ vertical: "large" }}>
      <h1>Список блюд</h1>
      <Box margin={{ horizontal: "small", vertical: "medium" }}>
        <CheckBoxGroup
          value={filters}
          onChange={(event) => {
            if (
              typeof event?.option === "object" &&
              typeof event.option.name === "string"
            ) {
              const item = event?.option.name;
              if (filters.includes(item)) {
                setFilters(filters.filter((x) => x !== item));
              } else {
                setFilters(filters.concat(item));
              }
            }
          }}
          options={FilterOptions}
        />
      </Box>
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
        data={data.map(({ image, deleted, ...rest }) => ({
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
