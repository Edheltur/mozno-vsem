import { createContext } from "react";
import { createStoreon } from "storeon";

import { Events, State } from "./types";
import { order } from "./order";
import { cart } from "./cart";
import { config } from "./config";
import { analytics } from "./analytics";
import { customContext } from "storeon/react";

export const store = createStoreon<State, Events>([
  cart,
  order,
  config,
  analytics,
  process.env.NODE_ENV !== "production" &&
    require("storeon/devtools").storeonDevtools,
]);

export const AppStateContext = createContext(store);

export const useAppState = customContext<State, Events>(AppStateContext);
