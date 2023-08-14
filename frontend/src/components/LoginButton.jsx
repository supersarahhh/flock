import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import auth0 from "auth0-js";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);

  const webAuth = new auth0.WebAuth({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientID: import.meta.env.VITE_AUTH0_CLIENT_ID
  });

  const Abc = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  useEffect(() => {
    const handleAuthResult = () => {
      const accessToken = window.location.hash.match(/access_token=([^&]+)/);

      if (accessToken) {
        setIsLoggedIn(true);
        window.location.hash = "";
      }
    };

    handleAuthResult();
  }, []);

  const handleLogin = () => {
    const url = webAuth.client.buildAuthorizeUrl({
      responseType: "token",
      redirectUri: window.location.origin,
      scope: "openid profile email",
      state: Abc()
    });

    window.open(url, "_blank");
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in</p>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </div>
  );
};

export default LoginButton;
