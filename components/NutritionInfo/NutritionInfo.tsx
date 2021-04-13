import React from "react";
import {
  Box,
  Heading,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Text,
} from "grommet";
import { TNutrition } from "common/data/menu";

interface IProps {
  nutrition: TNutrition;
}

export const NutritionInfo: React.FC<IProps> = ({ nutrition }) => (
  <Box>
    <Heading level="3" margin={{ bottom: "none" }}>
      Пищевая энергетическая ценность:
    </Heading>
    <Text size="medium" color="grey">
      (из рассчёта на 100гр)
    </Text>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Белки</TableCell>
          <TableCell>{nutrition.whey} г</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Жиры</TableCell>
          <TableCell>{nutrition.fats} г</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Углеводы</TableCell>
          <TableCell>{nutrition.carbs} г</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Энергетическая ценность</TableCell>
          <TableCell>{nutrition.energyValue} ккал</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Box>
);
