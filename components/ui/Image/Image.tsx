import React from "react";

interface IProps {
  url: string;
}

export const Image = ({ url }: IProps) => (
  <div
    style={{
      backgroundImage: `url(${url})`,
      backgroundSize: "cover",
      width: "100%",
      paddingTop: "100%",
    }}
  />
);
