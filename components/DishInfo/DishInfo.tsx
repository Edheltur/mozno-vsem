import React from "react";
import { Box, Button, Heading, Text } from "grommet";
import { FormAdd, FormSubtract } from "grommet-icons";

import { TMenuItem } from "common/data/menu";
import { useAppState } from "store/index";
import { RoundButton } from "components/ui/RoundedButton";
import { Image } from "components/ui/Image";

import { getItemCountInCart } from "common/data/cart";

interface IProps {
  item: TMenuItem;
}

export const DishInfo = ({ item }: IProps) => {
  const { title, image, id, ingredients } = item;
  const imageUrl = `/images/dishes/full/${image}`;
  const { cart, dispatch } = useAppState("cart");

  const handle = React.useMemo(
    () => ({
      add: () => dispatch("cart/changeCount", { id, delta: +1 }),
      remove: () => dispatch("cart/changeCount", { id, delta: -1 }),
    }),
    [dispatch, id]
  );
  const countInCart = getItemCountInCart(cart, id);

  return (
    <Box align="center" width={{ max: "500px" }}>
      <Image url={imageUrl} />
      <Heading level="2" textAlign="center">
        {title}
      </Heading>
      <Box direction="row" align="start">
        <ul style={{ margin: 0 }}>
          {ingredients.map((ingredient, index) => (
            <Text key={index} as="li" style={{ textTransform: "capitalize" }}>
              {ingredient}
            </Text>
          ))}
        </ul>
        {countInCart > 0 ? (
          <Box
            direction="row"
            justify="between"
            align="center"
            width={{ min: "150px" }}
          >
            <RoundButton
              onClick={handle.remove}
              icon={<FormSubtract color="brand" />}
            />
            <Text>{countInCart}</Text>
            <RoundButton
              onClick={handle.add}
              icon={<FormAdd color="brand" />}
            />
          </Box>
        ) : (
          <Box width={{ min: "150px" }}>
            <Button label="В корзину" onClick={handle.add} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
