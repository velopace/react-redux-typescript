import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import { Button } from "./buttons";

export function SearchBarAndSubmit({ callback }: SearchBarAndSubmitProps) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async () => {
    callback(searchTerm);
  };

  return (
    <Grid container style={{ gap: "0.25rem" }}>
      <Grid item>
        <TextField
          fullWidth
          size="small"
          label="search term"
          variant="outlined"
          value={searchTerm}
          onChange={updateSearchTerm}
        />
      </Grid>
      <Grid item>
        <Button tiny onClick={handleSubmit}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

export interface SearchBarAndSubmitProps {
  callback: (response: any) => void;
}
