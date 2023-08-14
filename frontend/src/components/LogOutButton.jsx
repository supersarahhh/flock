import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = async () => {
    await logout({ returnTo: window.location.origin });
    setLoggedOut(true);

    setTimeout(() => {
      setLoggedOut(false);
    }, 100); 
  };

  return (
    <div>
      {loggedOut ? (
        <p>You are logged out</p>
      ) : (
        <button onClick={handleLogout}>Log Out</button>
      )}
    </div>
  );
};

export default LogoutButton;

