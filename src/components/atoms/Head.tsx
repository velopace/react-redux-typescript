import styled from "styled-components";

const handleSizeType = (props): string => {
  if (props.large) {
    return "2.25rem";
  }

  if (props.small) {
    return "1.5rem";
  }

  if (props.tiny) {
    return "1.25rem";
  }

  return "2rem";
};

export interface HeadProps {
  large?: boolean;
  small?: boolean;
  tiny?: boolean;
  children?: any;
}

export const Head = styled.div<HeadProps>`
  font-size: ${(props) => handleSizeType(props)};
  color: {(props) => props.theme.text.header};
  font: {(props) => props.theme.fonts.primary};
`;
