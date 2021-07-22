import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { TextField, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const OrgInput = () => {
  const { loginWithRedirect } = useAuth0();
  const [orgName, setOrgName] = useState("");

  const handleLogin = () => {
    loginWithRedirect({
      scope: `org:${orgName}`,
    });
  };

  return (
    <Box justifyContent="center" width="50%">
      <TextField
        required
        autoFocus
        margin="dense"
        id="name"
        label="name"
        type="standard"
        fullWidth
        onChange={({ target: { value } }) => setOrgName(value)}
        value={orgName}
      />
      <Button onClick={handleLogin} color="primary">
        Continue
      </Button>
    </Box>
  );
};
