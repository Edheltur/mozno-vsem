import React from "react";
import { Anchor, Box, Image, Text } from "grommet";
import Link from "next/link";
import { TMenuItem } from "common/data/menu";

interface IProps {
  item: TMenuItem;
}

const IMAGE_STYLE = { width: 150, height: 150 };

export const TitleWithImage = React.memo(function TitleWithImage({
  item,
}: IProps) {
  const { title, image } = item;
  const imageUrl = `/images/dishes/preview/${image}`;

  return (
    <Box flex="grow">
      <Link href="/dish/[id]" as={`/dish/${item.id}`}>
        <Image style={IMAGE_STYLE} src={imageUrl} alt={title} />
      </Link>
      <Text size="15px" textAlign="center">
        <Link href="/dish/[id]" as={`/dish/${item.id}`}>
          <Anchor color="text" as="span">
            {title}
          </Anchor>
        </Link>
      </Text>
    </Box>
  );
});
