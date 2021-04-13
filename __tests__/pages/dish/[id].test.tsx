import React from "react";
import { render } from "@testing-library/react";

import DishPage from "pages/dish/[id]";

test("<DishPage/> renders", () => {
  render(<DishPage />);
});
