import React from "react";
import styled from "styled-components";

interface IProps {
  url: string;
}

export const Image = styled.div<IProps>`
  background-image: url(${({ url }) => url});
  background-size: cover;
  width: 100%;
  padding-top: 100%;
`;
