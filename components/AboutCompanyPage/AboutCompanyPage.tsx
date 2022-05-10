import React from "react";
import Head from "next/head";
import { Anchor, Image } from "grommet";
import { config } from "common/config";
import { InfoBlock } from "components/ui/InfoBlock";
import { Requisites } from "components/Requisites";

const Certificate: React.FC<{ name: string }> = ({ name }) => (
  <a href={`/images/about-company/full/${name}.jpg`} target="_blank">
    <Image src={`/images/about-company/preview/${name}.jpg`} width="50%" />
  </a>
);

export const AboutCompanyPage = () => (
  <>
    <Head>
      <title>О компании</title>
      <meta
        property="og:image"
        content={config.publicUrl + "/images/about/irina-ryl.jpg"}
      />
    </Head>
    <InfoBlock title="Что мы за компания?">
      Мы занимаемся приготовлением и&nbsp;доставкой полезных полуфабрикатов.
      Не&nbsp;используем вредные добавки, только натуральные специи
      и&nbsp;пряности. А&nbsp;ещё у&nbsp;нас есть&nbsp;
      <Anchor href="https://vk.com/mozno_vsem">ВКонтакте</Anchor>.
    </InfoBlock>
    <InfoBlock title="Для кого?">
      Наши полуфабрикаты предназначены для&nbsp;людей, которые хотят заботиться
      о&nbsp;своём здоровье и&nbsp;здоровье семьи, но&nbsp;не&nbsp;могут тратить
      много времени на&nbsp;приготовление вкусной и&nbsp;полезной еды.
    </InfoBlock>
    <Requisites />
    <InfoBlock title="Сертификаты">
      <Certificate name="санитарно-эпидемиологическое_заключение" />
      <Certificate name="сертифкат_соответвтсия_EAC" />
    </InfoBlock>
  </>
);
