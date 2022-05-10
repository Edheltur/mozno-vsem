import React from "react";
import { Box } from "grommet";

import { NavLink } from "components/ui/NavLink";

export const PageMenu = React.memo(function PageHeader() {
  return (
    <Box
      direction="row"
      as="nav"
      gap="small"
      justify="center"
      margin={{ top: "medium" }}
    >
      <NavLink label="Меню" href="/" />
      <NavLink label="Контакты" href="/contacts" />
      <NavLink label="Обо мне" href="/about" />
      <NavLink label="О компании" href="/about-company" />
    </Box>
  );
});
