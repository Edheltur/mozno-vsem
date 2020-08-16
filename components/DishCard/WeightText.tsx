import React from "react";
import { Text } from "grommet";

interface IProps {
  weight: number;
}

export const WeightText = ({ weight }: IProps) => {
  if (weight < 1000) {
    return (
      <Text size="small" color="dark-3">
        {weight}&nbsp;г
      </Text>
    );
  }

  return (
    <Text size="small" color="dark-3">
      {weight / 1000}&nbsp;кг
    </Text>
  );
};
