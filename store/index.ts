import { createContext } from "react";
import { createStoreon } from "storeon";
import { customContext } from "storeon/react";
import { persistState } from "@storeon/localstorage";

import { Events, State } from "./types";
import { order } from "./order";
import { cart } from "./cart";
import { analytics } from "./analytics";
import { user } from "./user";

export const store = createStoreon<State, Events>([
  cart,
  order,
  analytics,
  user,
  persistState(["cart", "user"]),
  process.env.NODE_ENV !== "production" &&
    process.browser &&
    require("storeon/devtools").storeonDevtools,
]);

export const AppStateContext = createContext(store);

export const useAppState = customContext<State, Events>(AppStateContext);
