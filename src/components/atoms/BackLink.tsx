import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { theme } from "config/theme";
import { TextNumerals } from "./Text";
import { BackIcon } from "./Icon";

const styles = () => createStyles({});

export interface BackLinkProps extends WithStyles<typeof styles> {
  children?: React.ReactNode;
}
const BackLinkComponent = ({ children }: BackLinkProps) => (
  <Box display="flex" alignItems="center">
    <Box display="flex">
      <BackIcon viewBox="0 0 20 9" color={theme.colors.subtitleText} />
    </Box>
    <Box style={{ marginLeft: 6 }}>
      <TextNumerals color={theme.colors.subtitleText}>{children}</TextNumerals>
    </Box>
  </Box>
);

const BackLink = withStyles(styles)(BackLinkComponent);

export { BackLink };
