import React from "react";
import { Anchor, Box, Heading, Text } from "grommet";
import { Phone } from "grommet-icons";

import { InfoBlock } from "components/ui/InfoBlock";
import { Telegram, WhatsApp, Vkontakte } from "components/ui/icons";

import styles from "./Contacts.module.css";
import { config } from "common/config";
import { Icon } from "grommet-icons/icons";

function formatPhone(phone: string) {
  const countryCode = phone[0];
  const cityCode = phone.slice(1, 4);
  const groups = [phone.slice(4, 7), phone.slice(7, 9), phone.slice(9, 11)];

  return `+${countryCode} (${cityCode}) ${groups.join("-")}`;
}

type LinkProps = {
  href: string;
  Icon?: Icon;
  text: string;
};
const Link: React.FC<LinkProps> = ({ href, Icon, text }) => (
  <Anchor href={href} target="_blank">
    <Box direction="row" align="center">
      {Icon && <Icon color="brand" className={styles.Contacts__icon} />}
      {text}
    </Box>
  </Anchor>
);

export const Contacts = () => {
  const formattedPhone = formatPhone(config.whatsAppPhoneNumber);
  return (
    <InfoBlock>
      <Text size="medium">
        <Box align="center">
          <Heading level="3">Приём заказов</Heading>
          <Box align="center" gap="small">
            <Link
              href={`tel:+${config.whatsAppPhoneNumber}`}
              Icon={Phone}
              text={formattedPhone}
            />
            <Link
              href={`https://wa.me/${config.whatsAppPhoneNumber}`}
              Icon={WhatsApp}
              text={formattedPhone}
            />
            <Link
              href={`https://t.me/${config.telegramUsername}`}
              Icon={Telegram}
              text={config.telegramUsername}
            />
          </Box>

          <Heading level="3">Наши блюда</Heading>
          <Link
            href="https://vk.com/mozno_vsem"
            Icon={Vkontakte}
            text="mozno_vsem"
          />
          <Link
            href="https://t.me/mozno_vsem"
            Icon={Telegram}
            text="mozno_vsem"
          />
          <Link href="https://www.instagram.com/mozno_vsem" text="mozno_vsem" />

          <Heading level="3">Блог Ирины Рыль</Heading>
          <Link
            href="https://vk.com/ryl.school"
            Icon={Vkontakte}
            text="ryl.school"
          />
          <Link
            href="https://t.me/rylschool"
            Icon={Telegram}
            text="rylschool"
          />
          <Link href="https://www.instagram.com/rylschool" text="rylschool" />
        </Box>
      </Text>
    </InfoBlock>
  );
};
