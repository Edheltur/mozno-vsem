import React, { useEffect } from "react";
import { useYandexMetrika } from "client/helpers/yandex-metrika";

interface IProps {
  url: string;
}

const NOT_BOUNCE_INTERVAL_MS = 15000;

const useEffectOnce = (effect: React.EffectCallback) => useEffect(effect, []);

export const YandexMetrika = React.memo(({ url }: IProps) => {
  const { hit, notBounce, extLink, counterId } = useYandexMetrika();
  useEffect(() => {
    hit({ url });
  });

  useEffectOnce(() => {
    setTimeout(() => {
      notBounce();
    }, NOT_BOUNCE_INTERVAL_MS);
  });

  useEffectOnce(() => {
    window.addEventListener("click", ({ target: link, defaultPrevented }) => {
      if (defaultPrevented) {
        return;
      }

      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      const isLocal = link.host === "" || window.location.host === link.host;
      if (isLocal) {
        return;
      }

      extLink(link.href, link.title);
    });
  });

  return (
    <noscript>
      <div>
        <img
          src={`https://mc.yandex.ru/watch/${counterId}`}
          style={{ position: "absolute", left: -9999 }}
          alt=""
        />
      </div>
    </noscript>
  );
});
