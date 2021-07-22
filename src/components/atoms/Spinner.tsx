import React from "react";
import styled from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";

export interface SpinnerProps {
  margin?: string;
  center?: boolean;
}
const SpinnerContainer = styled.div<SpinnerProps>`
  display: flex;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => props.center && "center"};
  align-items: ${(props) => props.center && "center"};
  width: ${(props) => props.center && "100%"};
  height: ${(props) => props.center && "100%"};
`;

interface Props {
  center?: boolean;
  margin?: string;
}

export const Spinner = ({ center, margin }: Props) => (
  <SpinnerContainer center={center} margin={margin}>
    <CircularProgress />
  </SpinnerContainer>
);
