import { StoreonModule } from "storeon";
import { Events, State } from "./types";
import { getItemCountInCart } from "common/data/cart";

export const cart: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({
    cart: { countById: {} },
  }));

  store.on("cart/clear", () => ({
    cart: {
      countById: {},
    },
  }));

  store.on("cart/changeCount", (state, { id, delta }) => {
    const previousCount = getItemCountInCart(state.cart, id);

    return {
      cart: {
        ...state.cart,
        countById: {
          ...state.cart.countById,
          [id]: previousCount + delta,
        },
      },
    };
  });
};
