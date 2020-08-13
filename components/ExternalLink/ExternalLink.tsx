import React from "react";
import { useYandexMetrika } from "client/helpers/yandex-metrika";

export const ExternalLink = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  const metrika = useYandexMetrika();
  return (
    <a
      {...props}
      onClick={(e) => {
        const { onClick, href, title } = props;
        if (onClick) {
          onClick(e);
        }

        if (href) {
          metrika.extLink(href, title);
        }
      }}
    />
  );
};
