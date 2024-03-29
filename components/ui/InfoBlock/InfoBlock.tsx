import React from "react";
import { Box, Heading, Text } from "grommet";

interface IProps {
  title?: string;
  maxWidth?: string;
}

export const InfoBlock: React.FC<IProps> = ({ title, maxWidth, children }) => (
  <Box
    width={{ max: maxWidth ?? "medium" }}
    margin={{ horizontal: "medium", top: "small" }}
  >
    {title && (
      <Heading level="2" textAlign="center" margin="small">
        {title}
      </Heading>
    )}
    <Text textAlign="center" size="small">
      {children}
    </Text>
  </Box>
);
