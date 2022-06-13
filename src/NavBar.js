import React from "react";
import { Link } from "react-router-dom";
import LoginLogout from "./components/LoginLogout";
//import "dotenv/config";
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Home </Link>
          <Link to="/testprep"> Test Prep </Link>
          <Link to="/about"> About Me </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/articles"> Articles </Link>
          <LoginLogout />
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
