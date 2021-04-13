import React from "react";
import { Box, Heading, Text } from "grommet";
import { TMenuItem } from "common/data/menu";

import { Image } from "components/ui/Image";
import { CartControl } from "./CartControl";
import { NutritionInfo } from "components/NutritionInfo";
import { useIsMounted } from "client/helpers/hooks";

interface IProps {
  item: TMenuItem;
}

const InfoText = ({ item }: IProps) => {
  const { price, weight, amount } = item;
  return amount === undefined ? (
    <>
      {weight}&nbsp;г за&nbsp;{price}&nbsp;₽
    </>
  ) : (
    <>
      {weight}г&nbsp;({amount}шт) за&nbsp;{price}&nbsp;₽
    </>
  );
};

export const DishInfo = React.memo(function DishInfo({ item }: IProps) {
  const { title, image, id, ingredients, nutrition } = item;
  const imageUrl = `/images/dishes/full/${image}`;
  const isMounted = useIsMounted();
  return (
    <Box align="stretch" width="600px" pad="medium">
      <Image url={imageUrl} />
      <Heading level="2" textAlign="center">
        {title}
      </Heading>
      <Box direction="row" justify="center" gap="medium" align="center">
        <Text size="xlarge">
          <InfoText item={item} />
        </Text>
        {isMounted && <CartControl id={id} />}
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
      {nutrition && <NutritionInfo nutrition={nutrition} />}
    </Box>
  );
});

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
