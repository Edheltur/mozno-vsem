import React from "react";
import { Box, Heading, Layer } from "grommet";

interface IProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export const Modal = ({ onClose, children }: IProps) => (
  <Layer
    position="center"
    responsive={false}
    margin="small"
    onClickOutside={onClose}
    onEsc={onClose}
  >
    <Box pad="medium" width="medium">
      {children}
    </Box>
  </Layer>
);

export const ModalHeader: React.FC = ({ children }) => (
  <Heading margin="none" level="3">
    {children}
  </Heading>
);

export const ModalContent: React.FC = ({ children }) => (
  <Box as="section" fill="horizontal">
    {children}
  </Box>
);

export const ModalControls: React.FC = ({ children }) => (
  <Box
    as="footer"
    gap="small"
    direction="row"
    align="center"
    justify="end"
    pad={{ top: "medium", bottom: "small" }}
  >
    {children}
  </Box>
);

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Controls = ModalControls;
