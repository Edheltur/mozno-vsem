import { useMemo } from "react";
import { useAppState } from "store";
import { extLink, hit, notBounce, reachGoal, userVars } from "lyam";

export function useYandexMetrika() {
  const {
    config: { yandexMetrikaCounterId: counterId },
  } = useAppState("config");

  return useMemo(
    () => ({
      counterId,
      hit: hit.bind(null, counterId),
      reachGoal: reachGoal.bind(null, counterId),
      extLink: extLink.bind(null, counterId),
      userVars: userVars.bind(null, counterId),
      notBounce: notBounce.bind(null, counterId),
    }),
    [counterId]
  );
}
