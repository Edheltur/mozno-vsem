import { StoreonModule } from "storeon";
import { Events, State } from "store/types";
import { createOrder } from "client/api";

export const order: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({
    order: { status: "new" },
  }));

  store.on("order/submit", () => ({
    order: { status: "submitting" },
  }));

  store.on("order/submit", async (state) => {
    const order = await createOrder(state.cart);
    store.dispatch("order/confirm", order);
  });

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
