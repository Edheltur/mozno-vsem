import React from "react";
import { Anchor } from "grommet";

interface IProps {
  profile: string;
}

export const InstagramLink: React.FC<IProps> = ({ profile, children }) => (
  <Anchor href={`https://www.instagram.com/${profile}`}>{children}</Anchor>
);
