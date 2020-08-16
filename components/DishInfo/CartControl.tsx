import React from "react";
import { Box, Button } from "grommet";
import { getItemCountInCart } from "common/data/cart";
import { useAppState } from "store";

import { RoundButton } from "components/ui/RoundedButton";
import { TMenuItemId } from "common/data/menu";

interface IProps {
  id: TMenuItemId;
}

const SIZES = {
  width: { min: "150px" },
  height: { min: "36px" },
} as const;

export const CartControl = ({ id }: IProps) => {
  const { cart, dispatch } = useAppState("cart");

  const handle = React.useMemo(
    () => ({
      add: () => dispatch("cart/changeCount", { id, delta: +1 }),
      remove: () => dispatch("cart/changeCount", { id, delta: -1 }),
    }),
    [id]
  );
  const countInCart = getItemCountInCart(cart, id);

  if (countInCart > 0) {
    return (
      <Box direction="row" justify="stretch" align="center" {...SIZES}>
        <RoundButton onClick={handle.remove} iconName="minus" />
        <Box flex="grow" align="center">
          {countInCart}
        </Box>
        <RoundButton onClick={handle.add} iconName="plus" />
      </Box>
    );
  }
  return (
    <Box {...SIZES}>
      <Button label="В корзину" onClick={handle.add} />
    </Box>
  );
};
