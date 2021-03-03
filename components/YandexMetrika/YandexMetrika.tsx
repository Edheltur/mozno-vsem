import React, { useEffect } from "react";
import Head from "next/head";

import { GOALS, useYandexMetrika } from "client/helpers/yandex-metrika";
import { useEffectOnce } from "client/helpers/hooks";

interface IProps {
  url: string;
}

const NOT_BOUNCE_INTERVAL_MS = 15000;

export const YandexMetrika = React.memo(function YandexMetrika({
  url,
}: IProps) {
  const { hit, notBounce, extLink, counterId, reachGoal } = useYandexMetrika();
  useEffect(() => {
    hit({ url });
  });

  useEffectOnce(() => {
    window.addEventListener("error", (event) => {
      reachGoal(GOALS.error, {
        error: {
          message: String(event?.message),
          date: String(new Date()),
          stack: String(event?.error?.stack),
        },
      });
    });
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

  if (!counterId) {
    return null;
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://mc.yandex.ru" />
      </Head>
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${counterId}`}
            style={{ position: "absolute", left: -9999 }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
});
