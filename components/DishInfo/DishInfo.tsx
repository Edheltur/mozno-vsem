import React from "react";
import { Box, Heading, Text, Image } from "grommet";
import { TMenuItem } from "common/data/menu";

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
  const previewImageUrl = `/images/dishes/medium/${image}`;
  const mediumImageUrl = `/images/dishes/medium/${image}`;
  const fullImageUrl = `/images/dishes/full/${image}`;

  const isMounted = useIsMounted();
  return (
    <Box align="stretch" width="600px" pad="medium">
      <picture>
        <source
          media="(max-width: 450px)"
          srcSet={`
            ${previewImageUrl} 300w, 
            ${mediumImageUrl} 600w, 
            ${fullImageUrl} 1200w`}
          sizes={`
            (min-width: 150px) 300px,
            (min-width: 450px) 600px,
            600px`}
        />
        <source srcSet={`${fullImageUrl} 2x, ${mediumImageUrl} 1x`} />
        <img src={mediumImageUrl} alt={title} width="100%" />
      </picture>

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
