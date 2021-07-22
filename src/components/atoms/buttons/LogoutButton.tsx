import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    localStorage.removeItem("user");
    logout({ returnTo: window.location.origin });
  };

  return (
    <Button variant="contained" onClick={handleLogout}>
      Log Out
    </Button>
  );
};
