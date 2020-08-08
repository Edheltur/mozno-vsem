import React from "react";
import Link from "next/link";
import { Anchor, Box, Image, Text } from "grommet";
import { FormAdd, FormSubtract, StatusGoodSmall } from "grommet-icons";

import { useAppState } from "store";
import { TMenuItem } from "common/data/menu";

import { RoundButton } from "./RoundButton";
import { getItemCountInCart } from "common/data/cart";

interface IProps {
  item: TMenuItem;
}

const Dot = () => <StatusGoodSmall size="4px" color="dark-3" />;

export const Dish = ({ item }: IProps) => {
  const { title, weight, price, id, image } = item;
  const imageUrl = `/images/dishes/preview/${image}`;
  const { cart, dispatch } = useAppState("cart");

  const handle = React.useMemo(
    () => ({
      add: () => dispatch("cart/changeCount", { id, delta: +1 }),
      remove: () => dispatch("cart/changeCount", { id, delta: -1 }),
    }),
    [dispatch, id]
  );
  const countInCart = getItemCountInCart(cart, id);

  const imageMarkup = (
    <Link href="/dish/[id]" as={`/dish/${id}`}>
      <Image style={{ width: 150, height: 150 }} src={imageUrl} alt={title} />
    </Link>
  );
  const titleMarkup = (
    <Box flex="grow">
      <Text size="15px" textAlign="center">
        <Link href="/dish/[id]" as={`/dish/${id}`}>
          <Anchor color="text">{title}</Anchor>
        </Link>
      </Text>
    </Box>
  );

  if (countInCart === 0) {
    return (
      <Box width="150px">
        {imageMarkup}
        {titleMarkup}
        <Box direction="row" justify="center" align="center" gap="xsmall">
          <Text size="small" color="dark-3">
            {weight}&nbsp;г
          </Text>
        </Box>
        <Box direction="row" justify="between" align="end">
          <Text size="large" margin={{ left: "xsmall" }}>
            {price}&nbsp;₽
          </Text>
          {"amount" in item && (
            <Text size="small" color="dark-3">
              за&nbsp;{item.amount}&nbsp;шт
            </Text>
          )}
          <RoundButton onClick={handle.add} icon={<FormAdd color="brand" />} />
        </Box>
      </Box>
    );
  }
  return (
    <Box width="150px">
      {imageMarkup}
      {titleMarkup}
      <Box direction="row" justify="center" align="center" gap="xsmall">
        <Text size="small" color="dark-3">
          {weight}&nbsp;г
        </Text>
        <Dot />
        <Text size="small" color="dark-3">
          {price}&nbsp;₽
        </Text>
      </Box>
      <Box direction="row" justify="between" align="center">
        <RoundButton
          onClick={handle.remove}
          icon={<FormSubtract color="brand" />}
        />
        <Text>{countInCart}</Text>
        <RoundButton onClick={handle.add} icon={<FormAdd color="brand" />} />
      </Box>
    </Box>
  );
};
