import React from "react";
import cn from "classnames";

import styles from "./Logo.module.css";

interface IProps {
  mix?: string;
}

export const Logo = React.memo(function Logo({ mix }: IProps) {
  return <div className={cn(styles.Logo, mix)} />;
});
