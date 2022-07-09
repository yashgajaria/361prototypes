import React from "react";
import {Outlet} from "react-router-dom";
import {Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

//Layout of page in general
const Layout = () => {
  return (
    <>
    {/* Navbar with WaterlooWellness title */}
      <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
      WaterlooWellness
      </Navbar.Brand>
    </Container>
  </Navbar>
  {/* Actual page content comes from the outlet component */}
      <Outlet />
    </>
  );
};

export default Layout;