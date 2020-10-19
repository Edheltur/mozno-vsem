import React, { useEffect, useState } from "react";

export const useEffectOnce = (effect: React.EffectCallback) =>
  useEffect(effect, []);

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffectOnce(() => {
    setIsMounted(true);
  });

  return isMounted;
};
