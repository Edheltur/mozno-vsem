import React from "react";
import { Box, Button, Heading, Layer } from "grommet";
import { FormClose } from "grommet-icons";

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
      {onClose && (
        <Button
          style={{ position: "absolute", right: "0", top: "0" }}
          icon={<FormClose />}
          onClick={onClose}
        />
      )}
    </Box>
  </Layer>
);

export const ModalHeader: React.FC = ({ children }) => (
  <Heading margin={{ bottom: "medium", top: "none", right: "48px" }} level="3">
    {children}
  </Heading>
);

export const ModalContent: React.FC = ({ children }) => (
  <Box as="section" fill="horizontal" style={{ overflowY: "auto" }}>
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
    margin={{ top: "medium" }}
    background="white"
    flex="grow"
  >
    {children}
  </Box>
);

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Controls = ModalControls;
