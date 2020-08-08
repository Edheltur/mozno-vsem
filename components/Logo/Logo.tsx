import React from "react";
import cn from "classnames";

import styles from "./Logo.module.css";

interface IProps {
  mix?: string;
}

export const Logo = ({ mix }: IProps) => (
  <div className={cn(styles.Logo, mix)} />
);
