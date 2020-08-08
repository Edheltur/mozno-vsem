import React from "react";
import { Button } from "grommet";

interface IRoundButtonProps {
  onClick: React.MouseEventHandler;
  icon: JSX.Element;
}

export const RoundButton = ({ onClick, icon }: IRoundButtonProps) => (
  <Button
    plain={false}
    style={{ padding: 2, borderRadius: "50%" }}
    icon={icon}
    onClick={onClick}
  />
);
