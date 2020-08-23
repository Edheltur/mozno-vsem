import React from "react";
import { Button } from "grommet";
import { FormAdd, FormSubtract } from "grommet-icons";
import styled from "styled-components";

interface IProps {
  onClick: React.MouseEventHandler;
  iconName: "plus" | "minus";
}
const ICONS = {
  plus: <FormAdd color="brand" />,
  minus: <FormSubtract color="brand" />,
};

const StyledButton = styled(Button)`
  padding: 2px;
  border-radius: 50%;
  touch-action: manipulation;
`;
export const RoundButton = React.memo(function RoundButton({
  onClick,
  iconName,
}: IProps) {
  return (
    <StyledButton plain={false} icon={ICONS[iconName]} onClick={onClick} />
  );
});
