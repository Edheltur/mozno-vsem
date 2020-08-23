import React from "react";
import { InfoBlock } from "components/ui/InfoBlock";
import { Anchor, Box } from "grommet";
import { Image } from "components/ui/Image";

export const AboutIrinaRyl = () => (
  <>
    <Box
      align="stretch"
      width="medium"
      pad={{ top: "medium", horizontal: "medium" }}
    >
      <Image url="/images/about/irina-ryl.jpg" />
    </Box>
    <InfoBlock title="Кто я?">
      Меня зовут Ирина Рыль, я практикующий врач-диетолог. Веду{" "}
      <Anchor href="https://www.instagram.com/ryl.marafon">блог</Anchor>{" "}
      о&nbsp;правильном питании, организую школу-марафон для&nbsp;желающих
      наладить свой обмен веществ. А теперь запускаю линейку полуфабрикатов.
    </InfoBlock>
  </>
);
