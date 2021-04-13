import React from "react";
import {
  Box,
  Heading,
  Text,
  Table,
  TableRow,
  TableCell,
  TableHeader,
  TableBody,
} from "grommet";
import { TMenuItem } from "common/data/menu";

import { Image } from "components/ui/Image";
import { CartControl } from "./CartControl";

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
      {nutrition && (
        <>
          <Heading level="3" margin={{ bottom: "none" }}>
            Пищевая энергетическая ценность:
          </Heading>
          <Text size="medium" color="grey">
            (из рассчёта на 100гр)
          </Text>
          <Box>
            <Table width="100%">
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
                  <TableCell>Углеводы</TableCell>з
                  <TableCell>{nutrition.carbs} г</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Энергетическая ценность</TableCell>
                  <TableCell>{nutrition.energyValue} ккал</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </>
      )}
    </Box>
  );
});

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
