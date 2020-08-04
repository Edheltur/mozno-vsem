import React from "react";
import cn from "classnames";

import styles from "./Header.module.css";

interface IProps {
  level: 1 | 2 | 3;
  mix?: string;
  children: React.ReactNode;
}

export const Header = ({ mix, level, children }: IProps) => {
  let props = {
    children,
    className: cn(styles.Header, mix),
  };

  if (level === 1) {
    return <h1 {...props} />;
  } else if (level === 2) {
    return <h2 {...props} />;
  }
  return <h3 {...props} />;
};
