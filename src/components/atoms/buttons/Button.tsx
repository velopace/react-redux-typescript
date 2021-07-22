import styled from "styled-components";

const getSizeFromProps = (props): string => {
  if (props.large) return "1rem";
  if (props.tiny) return "0.25rem";
  return "0.5rem";
};

const getFontSizeFromProps = (props): string => {
  if (props.large) return "1.25rem";
  if (props.tiny) return "0.85rem";
  return "1rem";
};

const getBackgroundColorFromProps = (props): string => {
  if (props.destructive) return props.theme.colors.destructive;
  if (props.primary) return props.theme.colors.primary;
  return "white";
};

const getColorFromProps = (props): string => {
  if (props.destructive || props.primary) return "white";
  return props.theme.headerTextColor;
};

const getBorderColorFromProps = (props): string => {
  if (props.destructive) return props.theme.colors.destructive;
  if (props.primary) return props.theme.colors.primary;
  return props.theme.headerTextColor;
};

export interface ButtonProps {
  large?: boolean;
  tiny?: boolean;
  primary?: boolean;
  maxWidth?: string;
  height?: string;
  destructive?: boolean;
  children?: any;
}

export const Button = styled.div<ButtonProps>`
  transition: opacity 150ms ease-in;
  padding: ${(props) => getSizeFromProps(props)};
  font-size: ${(props) => getFontSizeFromProps(props)};
  background-color: ${(props) => getBackgroundColorFromProps(props)};
  color: ${(props) => getColorFromProps(props)};
  border-radius: 6px;
  opacity: 1;
  max-width: ${(props) => props.maxWidth};
  text-align: center;
  border: 1px solid ${(props) => getBorderColorFromProps(props)};

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
