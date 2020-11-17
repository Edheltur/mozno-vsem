import { useMemo } from "react";
import {
  extLink,
  hit,
  notBounce,
  reachGoal as reachGoalUntyped,
  userVars,
} from "lyam";
import { config } from "common/config";

const noop = () => {};

const fakeMetrika = {
  counterId: null,
  hit: noop,
  reachGoal: noop,
  extLink: noop,
  userVars: noop,
  notBounce: noop,
};

export function useYandexMetrika() {
  const counterId = config.yandexMetrikaCounterId;
  return useMemo(() => {
    if (!counterId) {
      return fakeMetrika;
    }
    return {
      counterId,
      hit: hit.bind(null, counterId),
      reachGoal: reachGoal.bind(null, counterId),
      extLink: extLink.bind(null, counterId),
      userVars: userVars.bind(null, counterId),
      notBounce: notBounce.bind(null, counterId),
    };
  }, [counterId]);
}

export function reachGoal(
  counterId: string,
  name: TGoalName,
  userVars?: Lyam.UserVars
) {
  reachGoalUntyped(counterId, name, userVars);
}

export type TGoalName = typeof GOALS[keyof typeof GOALS];
export const GOALS = {
  orderComplete: "order-messenger-button-click",
  openCart: "open-cart",
  addItemToCart: "add-item-to-cart",
} as const;
