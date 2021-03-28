import React from "react";
import { render } from "@testing-library/react";

import HomePage from "../index";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

test("<HomePage/> renders", () => {
  useRouter.mockImplementationOnce(() => ({
    query: {},
  }));
  render(<HomePage />);
});
