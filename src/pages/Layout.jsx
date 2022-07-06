import React from "react";
import {Outlet} from "react-router-dom";
// import Navbar from "../Navbar";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';




const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        {/* <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} */}
      WaterlooWellness
      </Navbar.Brand>
      <Link to="/">Home</Link>
    </Container>
  </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;