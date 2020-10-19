import { StoreonModule } from "storeon";
import { Events, State } from "./types";
import { createOrder } from "client/api";

export const order: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({
    order: { status: "new" },
  }));

  store.on("order/submit", () => ({
    order: { status: "submitting" },
  }));

  store.on("order/submit", (state) =>
    createOrder({ cart: state.cart, user: state.user })
      .then((order) => store.dispatch("order/confirm", order))
      .then(() => store.dispatch("cart/clear"))
      .catch(() => store.dispatch("order/openCart"))
  );

  store.on("order/confirm", (state, { orderId }) => ({
    order: {
      id: orderId,
      status: "confirmed",
    },
  }));

  store.on("order/reset", () => ({
    order: { status: "new" },
  }));

  store.on("order/openCart", () => ({
    order: { status: "cart" },
  }));

  store.on("order/checkout", () => ({
    order: { status: "checkout" },
  }));
};
