import React from "react";
import Head from "next/head";
import { Anchor, Image } from "grommet";
import { config } from "common/config";
import { InfoBlock } from "components/ui/InfoBlock";
import { Requisites } from "components/Requisites";

const Certificate: React.FC<{ src: string }> = ({ src }) => (
  <a href={src} target="_blank">
    <Image src={src} width="50%" loading="lazy" />
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
      <Anchor href="https://www.instagram.com/mozno_vsem">Instagram</Anchor>.
    </InfoBlock>
    <InfoBlock title="Для кого?">
      Наши полуфабрикаты предназначены для&nbsp;людей, которые хотят заботиться
      о&nbsp;своём здоровье и&nbsp;здоровье семьи, но&nbsp;не&nbsp;могут тратить
      много времени на&nbsp;приготовление вкусной и&nbsp;полезной еды.
    </InfoBlock>
    <Requisites />
    <InfoBlock title="Сертификаты">
      <Certificate src="/images/about-company/санитарно-эпидемиологическое_заключение.jpg" />
      <Certificate src="/images/about-company/сертифкат_соответвтсия_EAC.jpg" />
    </InfoBlock>
  </>
);
