import React from "react";
import { Box, Text } from "grommet";
import { StatusGoodSmall } from "grommet-icons";

import { WeightText } from "components/DishCard/WeightText";

interface IProps {
  weight: number;
  amount?: number;
}

export const WeightAndAmount = React.memo(function WeightAndAmount({
  weight,
  amount,
}: IProps) {
  return (
    <Box direction="row" justify="center" align="center" gap="xsmall">
      <WeightText weight={weight} />
      {amount && <StatusGoodSmall size="4px" color="dark-3" />}
      {amount && (
        <Text size="small" color="dark-3">
          {amount}&nbsp;шт
        </Text>
      )}
    </Box>
  );
});
