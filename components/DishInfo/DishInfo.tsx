import React from "react";
import { Box, Heading, Text } from "grommet";
import { TMenuItem } from "common/data/menu";

import { Image } from "components/ui/Image";
import { CartControl } from "./CartControl";

interface IProps {
  item: TMenuItem;
}

export const DishInfo = ({ item }: IProps) => {
  const { title, image, id, ingredients } = item;
  const imageUrl = `/images/dishes/full/${image}`;

  return (
    <Box align="stretch" width="600px" pad="small">
      <Image url={imageUrl} />
      <Heading level="2" textAlign="center">
        {title}
      </Heading>
      <Box direction="row" justify="center">
        <CartControl id={id} />
      </Box>
      <Box as="ul">
        {ingredients.map((ingredient, index) => (
          <Text key={index} as="li">
            {ingredient}
          </Text>
        ))}
      </Box>
    </Box>
  );
};
