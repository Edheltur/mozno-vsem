import React, { useEffect } from "react";
import { useYandexMetrika } from "client/helpers/yandex-metrika";

interface IProps {
  url: string;
}

const NOT_BOUNCE_INTERVAL_MS = 15000;

export const YandexMetrika = React.memo(({ url }: IProps) => {
  const { hit, notBounce, counterId } = useYandexMetrika();
  useEffect(() => hit({ url }));

  useEffect(() => {
    setTimeout(() => {
      notBounce();
    }, NOT_BOUNCE_INTERVAL_MS);
  }, []);

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
