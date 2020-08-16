import React from "react";
import { Box, Text } from "grommet";
import { StatusGoodSmall } from "grommet-icons";

import { WeightText } from "components/DishCard/WeightText";

interface IProps {
  weight: number;
  price: number;
}

export const WeightAndPrice = React.memo(function WeightAndPrice({
  weight,
  price,
}: IProps) {
  return (
    <Box direction="row" justify="center" align="center" gap="xsmall">
      <WeightText weight={weight} />
      <StatusGoodSmall size="4px" color="dark-3" />
      <Text size="small" color="dark-3">
        {price}&nbsp;₽
      </Text>
    </Box>
  );
});
