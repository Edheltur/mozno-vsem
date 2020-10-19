import { StoreonModule } from "storeon";
import { Events, State } from "./types";

export const user: StoreonModule<State, Events> = (store) => {
  store.on("@init", () => ({
    user: { address: "", name: "", phone: "" },
  }));

  store.on("user/update", (state, user) => ({
    user: { ...state.user, ...user },
  }));
};
