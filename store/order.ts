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
    createOrder(state.cart)
      .then((order) => store.dispatch("order/confirm", order))
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
};
