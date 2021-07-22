import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import BaseIconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import { theme } from "config/theme";
import { TextNavActive } from "../Text";
import { AddIcon } from "../Icon";

const styles = () =>
  createStyles({
    iconButton: {
      backgroundColor: theme.colors.primaryBrand.main,
      width: "24px",
      height: "24px",
      "&:hover": {
        backgroundColor: theme.colors.primaryBrand.main,
        boxShadow: "0px 3px 10px rgba(5, 36, 178, 0.5)",
      },
      "&:active": {
        backgroundColor: theme.colors.primaryBrand.dark,
      },
    },
  });

export interface AddButtonProps extends WithStyles<typeof styles> {
  children?: React.ReactNode;
}
const AddButtonComponent = ({ classes, children }: AddButtonProps) => (
  <Box display="flex" alignItems="center">
    <BaseIconButton className={classes.iconButton} aria-label="add">
      <AddIcon viewBox="0 0 24 24" color={theme.colors.light} />
    </BaseIconButton>
    <Box ml={1}>
      <TextNavActive>{children}</TextNavActive>
    </Box>
  </Box>
);

const AddButton = withStyles(styles)(AddButtonComponent);

export { AddButton };
