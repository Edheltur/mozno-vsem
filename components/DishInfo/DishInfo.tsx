import React from "react";
import { Box, Heading, Text } from "grommet";
import { TMenuItem } from "common/data/menu";

import { Image } from "components/ui/Image";
import { CartControl } from "./CartControl";

interface IProps {
  item: TMenuItem;
}

export const DishInfo = React.memo(function DishInfo({ item }: IProps) {
  const { title, image, id, ingredients, price } = item;
  const imageUrl = `/images/dishes/full/${image}`;

  return (
    <Box align="stretch" width="600px" pad="medium">
      <Image url={imageUrl} />
      <Heading level="2" textAlign="center">
        {title}
      </Heading>
      <Box direction="row" justify="center" gap="medium" align="center">
        <Text size="xlarge">{price}&nbsp;₽</Text>
        <CartControl id={id} />
      </Box>

      <Heading level="3" margin={{ bottom: "none" }}>
        Состав:
      </Heading>
      <Box as="ul">
        {ingredients.map((ingredient, index) => (
          <Text key={index} as="li">
            {capitalizeFirstLetter(ingredient)}
          </Text>
        ))}
      </Box>
    </Box>
  );
});

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
