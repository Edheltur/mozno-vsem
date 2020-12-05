import React from "react";
import { Anchor, Box, Image, Text } from "grommet";
import Link from "next/link";
import { TMenuItem } from "common/data/menu";
import styles from "./TitleWithImage.module.css";

interface IProps {
  item: TMenuItem;
}

export const TitleWithImage = React.memo(function TitleWithImage({
  item,
}: IProps) {
  const { title, image } = item;
  const imageUrl = `/images/dishes/preview/${image}`;

  return (
    <Box flex="grow">
      <Link href="/dish/[id]" as={`/dish/${item.id}`}>
        <Image
          loading="lazy"
          width={150}
          height={150}
          src={imageUrl}
          alt={title}
          className={styles.TitleWithImage__image}
        />
      </Link>
      <Text size="15px" textAlign="center">
        <Link passHref href="/dish/[id]" as={`/dish/${item.id}`}>
          <Anchor className={styles.TitleWithImage__link} color="text">
            {title}
          </Anchor>
        </Link>
      </Text>
    </Box>
  );
});
