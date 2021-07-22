import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import BaseIconButton from "@material-ui/core/IconButton";
import { theme } from "config/theme";
import { ArrowDownIcon, ArrowUpIcon, EditIcon, TrashIcon } from "../Icon";

const styles = () =>
  createStyles({
    base: {
      width: "30px",
      height: "30px",
    },
    primaryEdit: {
      backgroundColor: theme.colors.primaryBrand.main,
      "&:hover": {
        backgroundColor: theme.colors.primaryBrand.main,
      },
    },
    darkEdit: {
      backgroundColor: theme.colors.primaryBrand.dark,
      "&:hover": {
        backgroundColor: theme.colors.primaryBrand.dark,
      },
    },
    primaryTrash: {
      backgroundColor: theme.colors.primaryBrand.inactive2,
      "&:hover": {
        backgroundColor: theme.colors.primaryBrand.inactive2,
      },
    },
    redTrash: {
      backgroundColor: theme.colors.error,
      "&:hover": {
        backgroundColor: theme.colors.error,
      },
    },
    defaultArrowUp: {
      width: "30px",
      height: "30px",
      backgroundColor: theme.colors.green.main,
      "&:hover": {
        backgroundColor: theme.colors.green.main,
      },
    },
    smallArrowUp: {
      width: "16px",
      height: "16px",
      backgroundColor: theme.colors.green.main,
      "&:hover": {
        backgroundColor: theme.colors.green.main,
      },
      padding: 0,
    },
    defaultArrowDown: {
      width: "30px",
      height: "30px",
      backgroundColor: theme.colors.secondaryBrand,
      "&:hover": {
        backgroundColor: theme.colors.secondaryBrand,
      },
    },
    smallArrowDown: {
      width: "16px",
      height: "16px",
      backgroundColor: theme.colors.secondaryBrand,
      "&:hover": {
        backgroundColor: theme.colors.secondaryBrand,
      },
      padding: 0,
    },
  });

export interface EditIconButtonProps extends WithStyles<typeof styles> {
  variant: "primary" | "dark";
}
const EditIconButtonComponent = ({ classes, variant }) => (
  <BaseIconButton className={`${classes.base} ${classes[`${variant}Edit`]}`}>
    <EditIcon viewBox="-5 -5 24 24" color={theme.colors.light} />
  </BaseIconButton>
);
const EditIconButton = withStyles(styles)(EditIconButtonComponent);

export interface TrashIconButtonProps extends WithStyles<typeof styles> {
  variant: "primary" | "red";
}
const TrashIconButtonComponent = ({ classes, variant }) => (
  <BaseIconButton className={`${classes.base} ${classes[`${variant}Trash`]}`}>
    <TrashIcon viewBox="-5 -3.2 24 24" color={theme.colors.light} />
  </BaseIconButton>
);
const TrashIconButton = withStyles(styles)(TrashIconButtonComponent);

export interface ArrowUpIconButtonProps extends WithStyles<typeof styles> {
  size: "default" | "small";
}
const ArrowUpIconButtonComponent = ({ classes, size }) => {
  const viewBox = size === "default" ? "-3.8 -3.2 24 24" : "-15 -15 46 46";
  return (
    <BaseIconButton className={`${classes[`${size}ArrowUp`]}`}>
      <ArrowUpIcon viewBox={viewBox} color={theme.colors.light} />
    </BaseIconButton>
  );
};
const ArrowUpIconButton = withStyles(styles)(ArrowUpIconButtonComponent);

export interface ArrowDownIconButtonProps extends WithStyles<typeof styles> {
  size: "default" | "small";
}
const ArrowDownIconButtonComponent = ({ classes, size }) => {
  const viewBox = size === "default" ? "-3.8 -3.2 24 24" : "-15 -15 46 46";
  return (
    <BaseIconButton className={`${classes[`${size}ArrowDown`]}`}>
      <ArrowDownIcon viewBox={viewBox} color={theme.colors.light} />
    </BaseIconButton>
  );
};
const ArrowDownIconButton = withStyles(styles)(ArrowDownIconButtonComponent);

export {
  EditIconButton,
  TrashIconButton,
  ArrowUpIconButton,
  ArrowDownIconButton,
};
