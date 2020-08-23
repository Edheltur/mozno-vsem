import React from "react";
import { Anchor, Box, Heading, Text } from "grommet";
import { Instagram, Phone } from "grommet-icons";

import { InfoBlock } from "components/ui/InfoBlock";
import { Telegram, WhatsApp } from "components/ui/icons";
import { useAppState } from "store/index";

import styles from "./Contacts.module.css";

function formatPhone(phone: string) {
  const countryCode = phone[0];
  const cityCode = phone.slice(1, 4);
  const groups = [phone.slice(4, 7), phone.slice(7, 9), phone.slice(9, 11)];

  return `+${countryCode} (${cityCode}) ${groups.join("-")}`;
}

export const Contacts = () => {
  const { config } = useAppState("config");
  const formattedPhone = formatPhone(config.whatsAppPhoneNumber);
  return (
    <InfoBlock>
      <Text size="medium">
        <Box align="center">
          <Heading level="3">Приём заказов</Heading>
          <Anchor href={"tel:+" + config.whatsAppPhoneNumber}>
            <Box direction="row" align="center">
              <Phone color="brand" className={styles.Contacts__icon} />
              {formattedPhone}
            </Box>
          </Anchor>

          <Anchor href={`https://wa.me/${config.whatsAppPhoneNumber}`}>
            <Box direction="row" align="center">
              <WhatsApp color="brand" className={styles.Contacts__icon} />
              {formattedPhone}
            </Box>
          </Anchor>

          <Anchor href={`https://t.me/${config.telegramUsername}`}>
            <Box direction="row" align="center">
              <Telegram color="brand" className={styles.Contacts__icon} />
              {config.telegramUsername}
            </Box>
          </Anchor>

          <Heading level="3">Наши блюда</Heading>
          <Anchor href="https://www.instagram.com/mozno_vsem">
            <Box direction="row" align="center">
              <Instagram color="brand" className={styles.Contacts__icon} />
              mozno_vsem
            </Box>
          </Anchor>

          <Heading level="3">Блог Ирины Рыль</Heading>
          <Anchor href="https://www.instagram.com/ryl.marafon">
            <Box direction="row" align="center">
              <Instagram color="brand" className={styles.Contacts__icon} />
              ryl.marafon
            </Box>
          </Anchor>
        </Box>
      </Text>
    </InfoBlock>
  );
};
