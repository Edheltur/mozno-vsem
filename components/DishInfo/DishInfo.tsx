import React from "react";
import { Box, Button, Heading, Image } from "grommet";

import { TMenuItem } from "common/data/menu";
import { useAppState } from "store/index";
import { Text } from "grommet/es6";
import { RoundButton } from "components/Dish/RoundButton";
import { FormAdd } from "grommet-icons";
import { FormSubtract } from "grommet-icons/es6";
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
      <Image src={imageUrl} fill />
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
            width={{ min: "130px" }}
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
          <Box width={{ min: "130px" }}>
            <Button label="В корзину" onClick={handle.add} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
