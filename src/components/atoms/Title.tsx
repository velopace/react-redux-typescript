import React from "react";
import Typography from "@material-ui/core/Typography";

export function Title({ children }: TitleProps) {
  return (
    <Typography component="h6" variant="subtitle2" color="primary" gutterBottom>
      {children}
    </Typography>
  );
}

export interface TitleProps {
  children?: React.ReactChild;
}
