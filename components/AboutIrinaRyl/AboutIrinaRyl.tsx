import React from "react";
import { InfoBlock } from "components/ui/InfoBlock";
import { Box } from "grommet";
import { Image } from "components/ui/Image";
import { InstagramLink } from "components/InstagramLink";

export const AboutIrinaRyl = () => (
  <>
    <Box
      align="stretch"
      width="medium"
      pad={{ top: "medium", horizontal: "medium" }}
    >
      <Image url="/images/about/irina-ryl.jpg" />
    </Box>
    <InfoBlock>
      Меня зовут Ирина Рыль, я практикующий врач-диетолог (стаж в профессии 24
      года). Веду <InstagramLink profile="rylschool">блог</InstagramLink>{" "}
      о&nbsp;рациональном питании, организую школу-марафон для&nbsp;желающих
      наладить свой обмен веществ, избавиться от&nbsp;инсулинорезистентности
      и&nbsp;решить проблемы с&nbsp;жкт. А&nbsp;теперь запустила линейку
      полуфабрикатов.
    </InfoBlock>
  </>
);
