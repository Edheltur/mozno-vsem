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
    <Text size="xlarge">
      {weight}&nbsp;г за&nbsp;{price}&nbsp;₽
    </Text>
  ) : (
    <Text size="xlarge">
      {weight}г&nbsp;({amount}шт) за&nbsp;{price}&nbsp;₽
    </Text>
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
      <div
        style={{
          width: "100%",
          paddingBottom: "100%",
          position: "relative",
          height: 0,
        }}
      >
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
          <img
            src={mediumImageUrl}
            alt={title}
            style={{ position: "absolute", width: "100%", height: "auto" }}
          />
        </picture>
      </div>

      <Heading level="2" textAlign="center">
        {title}
      </Heading>
      <Box direction="row" justify="center" gap="medium" align="center">
        <InfoText item={item} />
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
