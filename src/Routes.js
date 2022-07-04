import React from "react";
import { Route } from "react-router-dom";
import Map from "./pages/Map";
import Home from "./pages/Home";


export default function Routes() {
  return (
    <Routes>
      <Route exact path="/">
        {/* <Home /> */}
        <div><p>Welcome Home</p></div>
      </Route>
      {/* <Route exact path="/map">
        <Map />
      </Route> */}
    </Routes>
  );
}