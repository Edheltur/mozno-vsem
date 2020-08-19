import React from "react";
import { Button } from "grommet";
import { FormAdd, FormSubtract } from "grommet-icons";

interface IProps {
  onClick: React.MouseEventHandler;
  iconName: "plus" | "minus";
}
const ICONS = {
  plus: <FormAdd color="brand" />,
  minus: <FormSubtract color="brand" />,
};

export const RoundButton = React.memo(function RoundButton({
  onClick,
  iconName,
}: IProps) {
  return (
    <Button
      plain={false}
      style={{ padding: 2, borderRadius: "50%" }}
      icon={ICONS[iconName]}
      onClick={onClick}
    />
  );
});
