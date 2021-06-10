import { StoreonModule } from "storeon";
import { Events, State } from "./types";
import {
  GOALS,
  reachGoal as reachGoalWithCounter,
  TGoalName,
} from "client/helpers/yandex-metrika";
import { config } from "common/config";

export const analytics: StoreonModule<State, Events> = (store) => {
  store.on("order/openCart", () => {
    reachGoal(GOALS.openCart);
  });

  store.on("cart/changeCount", (state, { delta }) => {
    if (delta > 0) {
      reachGoal(GOALS.addItemToCart);
    }
  });
};

function reachGoal(name: TGoalName, params?: Lyam.Params) {
  if (config.yandexMetrikaCounterId) {
    reachGoalWithCounter(config.yandexMetrikaCounterId, name, params);
  }
}
