import styled from "styled-components";

export interface DividerProps {
  width?: string;
}

export const Divider = styled.div<DividerProps>`
  border-bottom: 1px solid #c4c4c4;
  width: ${(props) => props.width || "100%"};
  margin: 0.5rem 0;
`;
