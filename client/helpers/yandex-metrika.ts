import { useMemo } from "react";
import {
  extLink,
  hit,
  notBounce,
  reachGoal as reachGoalUntyped,
  params,
} from "lyam";
import { config } from "common/config";

const noop = () => {};

const fakeMetrika = {
  counterId: null,
  hit: noop,
  reachGoal: noop,
  extLink: noop,
  params: noop,
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
      params: params.bind(null, counterId),
      notBounce: notBounce.bind(null, counterId),
    };
  }, [counterId]);
}

export function reachGoal(
  counterId: string,
  name: TGoalName,
  params?: Lyam.Params
) {
  reachGoalUntyped(counterId, name, params);
}

export type TGoalName = typeof GOALS[keyof typeof GOALS];
export const GOALS = {
  error: "error",
  orderComplete: "order-messenger-button-click",
  openCart: "open-cart",
  addItemToCart: "add-item-to-cart",
} as const;
