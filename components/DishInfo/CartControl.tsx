import React from "react";
import { Box, Button, Text } from "grommet";
import { FormAdd, FormSubtract } from "grommet-icons";
import { getItemCountInCart } from "common/data/cart";
import { useAppState } from "store/index";

import { RoundButton } from "components/ui/RoundedButton";
import { TMenuItemId } from "common/data/menu";

interface IProps {
  id: TMenuItemId;
}

const WIDTH = { min: "150px" };

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
      <Box direction="row" justify="between" align="center" width={WIDTH}>
        <RoundButton
          onClick={handle.remove}
          icon={<FormSubtract color="brand" />}
        />
        <Text>{countInCart}</Text>
        <RoundButton onClick={handle.add} icon={<FormAdd color="brand" />} />
      </Box>
    );
  }
  return (
    <Box width={WIDTH}>
      <Button label="В корзину" onClick={handle.add} />
    </Box>
  );
};
