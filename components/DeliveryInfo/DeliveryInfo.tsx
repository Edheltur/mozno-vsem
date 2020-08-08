import React from "react";
import { Box, Heading, Text } from "grommet";

import delivery from "common/data/delivery";

export const DeliveryInfo = () => (
  <Box width={{ max: "medium" }} margin={{ horizontal: "medium" }}>
    <Heading level="2" textAlign="center" margin="small">
      {delivery.title}
    </Heading>
    <Text textAlign="center" size="small">
      {delivery.description}
    </Text>
  </Box>
);
