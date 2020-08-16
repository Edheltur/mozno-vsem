import React from "react";
import { Box, Text } from "grommet";

import { useAppState } from "store";
import { RoundButton } from "components/ui/RoundedButton/RoundButton";
import { TMenuItem } from "common/data/menu";

import { WeightAndAmount } from "./WeightAndAmount";
import { WeightAndPrice } from "./WeightAndPrice";
import { TitleWithImage } from "./TitleWithImage";

interface IProps {
  item: TMenuItem;
  countInCart: number;
}

const Layout = React.memo(function Layout({ item, countInCart }: IProps) {
  const { weight, price, id, amount } = item;
  const { dispatch } = useAppState();

  const handle = React.useMemo(
    () => ({
      add: () => dispatch("cart/changeCount", { id, delta: +1 }),
      remove: () => dispatch("cart/changeCount", { id, delta: -1 }),
    }),
    [dispatch, id]
  );

  if (countInCart > 0) {
    return (
      <>
        <WeightAndPrice price={price} weight={weight} />
        <Box direction="row" justify="between" align="center">
          <RoundButton onClick={handle.remove} iconName="minus" />
          <Box flex="grow" align="center">
            {countInCart}
          </Box>
          <RoundButton onClick={handle.add} iconName="plus" />
        </Box>
      </>
    );
  }
  return (
    <>
      <WeightAndAmount weight={weight} amount={amount} />
      <Box direction="row" justify="between" align="end">
        <Text size="large" margin={{ left: "xsmall" }}>
          {price}&nbsp;₽
        </Text>
        <RoundButton onClick={handle.add} iconName="plus" />
      </Box>
    </>
  );
});

export const DishCard = React.memo(function DishCard({
  item,
  countInCart,
}: IProps) {
  return (
    <Box width="150px">
      <TitleWithImage item={item} />
      <Layout item={item} countInCart={countInCart} />
    </Box>
  );
});
