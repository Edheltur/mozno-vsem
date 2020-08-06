import { StoreonModule } from "storeon";
import { Events, State } from "store/types";

export const cart: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({
    cart: { countById: {} },
  }));

  store.on("cart/clear", () => ({
    cart: {
      countById: {},
    },
  }));

  store.on("cart/add", (state, { id }) => {
    const previousCount = state.cart.countById[id] ?? 0;

    return {
      cart: {
        ...state.cart,
        countById: {
          ...state.cart.countById,
          [id]: previousCount + 1,
        },
      },
    };
  });
};
