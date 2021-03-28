import React from "react";
import { items } from "common/data/menu";
import { Box, List } from "grommet";

export const EmptyImagesPage = () => {
  return (
    <Box margin={{ vertical: "large" }}>
      <h1>Блюда без картинок</h1>
      <List
        primaryKey="id"
        secondaryKey="title"
        data={items.filter(({ image }) => image === "empty.jpg")}
      />
    </Box>
  );
};

EmptyImagesPage.commonPageProps = {
  disableHeader: true,
  disableMenu: true,
  noIndex: true,
};
