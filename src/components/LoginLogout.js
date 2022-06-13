import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useState } from "react";

function LoginLogout() {
  const [isLogined, setIsLogined] = useState(false);
  const [accessToken, setAccessToken] = useState(" ");

  //   const responseGoogle = (response) => {
  //     console.log(response);
  //     console.log(response.profileObj);
  //   };

  function login(response) {
    if (response.accessToken) {
      setIsLogined(true);
      setAccessToken(response.accessToken);
      alert(`Welcome ${response.profileObj.givenName}, Log in successful!`);
      console.log(response.profileObj);
    }
  }

  function logout(response) {
    setIsLogined(false);
    setAccessToken(" ");
    alert("Log out successful!");
  }

  function handleLoginFailure(response) {
    alert("Failed to log in");
  }
  function handleLogoutFailure(response) {
    alert("Failed to log out");
  }

  return (
    <>
      {isLogined ? (
        <GoogleLogout
          clientId="792545934050-u69iu75rnrqp7ofgq5kb5retai751ddi.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        />
      ) : (
        <GoogleLogin
          clientId="792545934050-u69iu75rnrqp7ofgq5kb5retai751ddi.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          responseType="code,token"
        />
      )}
      {/* {accessToken ? (
        <h5>
          Your Access Token: <br />
          <br /> {accessToken}
        </h5>
      ) : null} */}
    </>
  );
}

export default LoginLogout;
