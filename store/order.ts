import { StoreonModule } from "storeon";
import { Events, State } from "store/types";

export const order: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({
    order: { status: "new" },
  }));

  store.on("order/confirm", (state) => {
    return {
      ...state,
      order: {
        ...state.order,
        status: "confirmed",
      },
    };
  });

  store.on("order/reset", (state) => {
    return {
      ...state,
      order: { status: "new" },
    };
  });

  store.on("order/openCart", (state) => {
    return {
      ...state,
      order: { status: "cart" },
    };
  });
};
