import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
          <Link to="/">Home</Link>
        {/* <li>
          <Link to="/map">Map</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;