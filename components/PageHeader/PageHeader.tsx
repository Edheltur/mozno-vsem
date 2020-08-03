import React from "react";
import styles from "./PageHeader.module.css";
import { Logo } from "components/Logo";
import { Sticky } from "semantic-ui-react";

export const PageHeader = () => (
  <Sticky>
    <header className={styles.PageHeader}>
      <Logo />
    </header>
  </Sticky>
);
