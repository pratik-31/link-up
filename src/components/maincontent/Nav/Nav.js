import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Nav.css";
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
<<<<<<< HEAD
<<<<<<< HEAD
  const baseURL = "/jazzy-dasik-bc8137.netlify.app";
=======
>>>>>>> parent of 0dff9d2 (links updated)
=======
>>>>>>> parent of 0dff9d2 (links updated)
  const logInClick = () => {
    window.location = "/Login";
    console.log("Button clicked!");
  };
  const registerInClick = () => {
    window.location = "/Register";
    console.log("Button clicked!");
  };
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="nav">
      <div className="website__name">linkup</div>
      <div className="nav__options">
        {/* <div className="nav__text">Explore</div>
        <div className="nav__text">How It Works</div> */}
        <div className="nav__text">
          {/* <Link to="/Login" className="loginSignup">
            Login
          </Link> */}
          {isAuthenticated ? (
            <>
              <h2>Welcome {user.name}</h2>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="loginSignup"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                className="loginSignup"
                onClick={() => loginWithRedirect()}
              >
                Join as Brand
              </button>
              <button
                className="loginSignup"
                onClick={() => loginWithRedirect()}
              >
                Join as Creator
              </button>
            </>
          )}
        </div>
        <div className="nav__text shade">
          {/* <Link to="/Register" className="loginSignup">
            Register
          </Link> */}
        </div>
        {/* <div className="nav__text shade">Join as Creator</div> */}
      </div>
    </div>
  );
}

export default Nav;
