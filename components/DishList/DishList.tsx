import React, { useCallback } from "react";
import { Heading, Tab, Tabs } from "grommet";

import { categories } from "common/data/categories";
import { DishCard } from "components/DishCard";

import styles from "./DishList.module.css";
import { getItemCountInCart } from "common/data/cart";
import { useAppState } from "store";
import { useRouter } from "next/router";

const messages = { tabContents: "список" } as const;

const List = React.memo(function List() {
  const { cart } = useAppState("cart");

  const router = useRouter();
  const { category, ...queryWithoutCategory } = router.query;
  const activeIndex = Math.max(
    categories.findIndex((x) => x.slug === category),
    0
  );

  const handleActivate = useCallback((index: number) => {
    const categorySlug = categories[index].slug;
    const url = {
      pathname: router.pathname,
      query:
        categorySlug === "all"
          ? queryWithoutCategory
          : { ...queryWithoutCategory, category: categorySlug },
    };

    router.push(url, undefined, { shallow: true });
  }, []);
  return (
    <Tabs
      className={styles.DishList__tabs}
      messages={messages}
      activeIndex={activeIndex}
      onActive={handleActivate}
    >
      {categories.map(({ title, items, slug }) => (
        <Tab title={title} key={slug}>
          <div className={styles.DishList__list}>
            {uniq(items)
              .filter((v, i, a) => a.indexOf(v) === i)
              .map((item) => (
                <DishCard
                  countInCart={getItemCountInCart(cart, item.id)}
                  item={item}
                  key={item.id}
                  mix={styles.DishList__listItem}
                />
              ))}
          </div>
        </Tab>
      ))}
    </Tabs>
  );
});

export const DishList = () => {
  return (
    <div className={styles.DishList}>
      <Heading level="2" textAlign="center" margin={{ bottom: "xsmall" }}>
        Меню
      </Heading>
      <List />
    </div>
  );
};

function uniq<T>(arr: ReadonlyArray<T>): ReadonlyArray<T> {
  return arr.filter((v, i) => arr.indexOf(v) === i);
}
