import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import { theme } from "config/theme";

const styles = () =>
  createStyles({
    base: {
      borderRadius: 100,
      "&.Mui-disabled": {
        color: theme.colors.subtitleText,
        backgroundColor: theme.colors.accents.main,
        border: "none",
      },
    },
    main: {
      color: theme.colors.light,
      backgroundColor: theme.colors.primaryBrand.main,
      "&:hover": {
        backgroundColor: theme.colors.primaryBrand.main,
        boxShadow: "0px 3px 10px rgba(5, 36, 178, 0.5)",
      },
      "&:active": {
        backgroundColor: theme.colors.primaryBrand.dark,
      },
    },
    secondary: {
      color: theme.colors.primaryBrand.main,
      backgroundColor: theme.colors.light,
      border: `1px solid ${theme.colors.primaryBrand.main}`,
      boxSizing: "border-box",
      "&:hover": {
        backgroundColor: theme.colors.primaryBrand.inactive2,
        boxShadow: `0px 3px 10px ${theme.colors.primaryBrand.inactive2}`,
      },
      "&:active": {
        color: theme.colors.light,
        backgroundColor: theme.colors.primaryBrand.dark,
      },
    },
  });

export interface MuiButtonProps extends WithStyles<typeof styles> {
  variant: "main" | "secondary";
  children?: React.ReactNode;
  disabled?: boolean;
}
const MuiButtonComponent = ({
  variant,
  children,
  disabled,
  classes,
  ...rest
}: MuiButtonProps) => (
  <Button
    className={`${classes.base} ${classes[variant]}`}
    variant="contained"
    disabled={disabled}
    {...rest}
  >
    {children}
  </Button>
);

const MuiButton = withStyles(styles)(MuiButtonComponent);

export { MuiButton };
