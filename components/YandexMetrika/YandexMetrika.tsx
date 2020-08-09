import React, { useEffect } from "react";
import ym, { YMInitializer } from "react-yandex-metrika";
import { IYandexMetrikaConfig } from "store/types";

interface IProps {
  config: IYandexMetrikaConfig;
  path: string;
}

const NoScriptCounter = ({ accounts }: { accounts: number[] }) => (
  <noscript>
    <div>
      {accounts.map((counter) => (
        <img
          key={counter}
          src={`https://mc.yandex.ru/watch/${counter}`}
          style={{ position: "absolute", left: -9999 }}
          alt=""
        />
      ))}
    </div>
  </noscript>
);

export const YandexMetrika = React.memo(({ config, path }: IProps) => {
  useEffect(() => ym("hit", [path]));
  return (
    <>
      <YMInitializer
        accounts={config.accounts}
        version="2"
        options={config.options}
      />
      <NoScriptCounter accounts={config.accounts} />
    </>
  );
});
