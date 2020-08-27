import { StoreonModule } from "storeon";
import { Events, State } from "./types";
import {
  GOALS,
  reachGoal as reachGoalWithCounter,
  TGoalName,
} from "client/helpers/yandex-metrika";

export const analytics: StoreonModule<State, Events> = (store) => {
  store.on("order/openCart", (state) => {
    reachGoal(state, GOALS.openCart);
  });

  store.on("cart/changeCount", (state, { delta }) => {
    if (delta > 0) {
      reachGoal(state, GOALS.addItemToCart);
    }
  });
};

function reachGoal(
  { config }: State,
  name: TGoalName,
  userVars?: Lyam.UserVars
) {
  if (config.yandexMetrikaCounterId) {
    reachGoalWithCounter(config.yandexMetrikaCounterId, name, userVars);
  }
}
