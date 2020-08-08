import { createContext } from "react";
import { createStoreon } from "storeon";
import { storeonDevtools } from "storeon/devtools";

import { Events, State } from "./types";
import { order } from "./order";
import { cart } from "./cart";
import { config } from "./config";
import { customContext } from "storeon/react";

export const store = createStoreon<State, Events>([
  cart,
  order,
  config,
  process.env.NODE_ENV !== "production" && storeonDevtools,
]);

export const AppStateContext = createContext(store);

export const useAppState = customContext<State, Events>(AppStateContext);
