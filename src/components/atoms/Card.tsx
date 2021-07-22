import styled, { css } from "styled-components";

export interface CardProps {
  height?: string;
  center?: boolean;
  enabledHover?: boolean;
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) => props.theme.colors.background.primary};
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgb(51 51 79 / 2%);
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: ${(props) => props.height};
  align-items: ${(props) => props.center && "center"};
  justify-content: ${(props) => props.center && "center"};
  ${(props) =>
    props.enabledHover &&
    css`
      transition: background-color 150ms ease-out, color 150ms ease-out;
      cursor: pointer;
      &:hover {
        background-color: ${props.theme.colors.primary};
        color: white;
      }
    `}
`;
