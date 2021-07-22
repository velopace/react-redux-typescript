import React from "react";
import { Typography } from "@material-ui/core";
import styled, { css } from "styled-components";

type TypographyProps = React.ComponentProps<typeof Typography>;

export interface TextH1Props extends TypographyProps {
  children: React.ReactNode;
}
export const TextH1 = ({ ...props }: TypographyProps) => (
  <Typography variant="h1" {...props} />
);

const baseFontStyle = css`
  font-family: Work Sans;
  font-style: normal;
  color: ${(props) => props.theme.colors.dark};
`;

export interface TextH2Props {
  children?: React.ReactNode;
}
export const TextH2 = ({ ...props }: TypographyProps) => (
  <Typography variant="h2" {...props} />
);

export interface TextSubtitleProps {
  children?: React.ReactNode;
}
export const TextSubtitle = ({ ...props }: TypographyProps) => (
  <Typography variant="subtitle1" {...props} />
);

export interface TextBodyProps {
  children?: React.ReactNode;
}
export const TextBody = ({ ...props }: TypographyProps) => (
  <Typography variant="body1" {...props} />
);

export interface TextButtonProps {
  children?: React.ReactNode;
}
export const TextButton = ({ ...props }: TypographyProps) => (
  <Typography variant="button" {...props} />
);

export interface TextNumeralsProps {
  children?: React.ReactNode;
  color?: React.ReactNode;
}
export const TextNumerals = styled.div`
  ${baseFontStyle}
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.color};
`;

export interface TextNavActiveProps {
  children?: React.ReactNode;
}
export const TextNavActive = styled.div`
  ${baseFontStyle}
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
`;

export interface TextNavInactiveProps {
  children?: React.ReactNode;
}
export const TextNavInactive = styled.div`
  ${baseFontStyle}
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;

export interface TextSmallProps {
  children?: React.ReactNode;
}
export const TextSmall = styled.small`
  ${baseFontStyle}
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
`;
