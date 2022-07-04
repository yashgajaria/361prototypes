import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, Container } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";




function App() {
  // const history = useHistory();

  // useEffect(() => {
  //   onLoad();
  // }, []);
  

  // return (
  //   <div className="App container">
  //     <Navbar fluid collapseOnSelect>
  //         <Navbar.Brand>
  //           <Link to="/">Home</Link>
  //         </Navbar.Brand>
  //         <Navbar.Toggle />
  //       </Navbar.Header>
  //       {/* <Navbar.Collapse> */}
  //         {/* <Nav pullRight>
  //           <NavItem href="/signup">Signup</NavItem>
  //           <NavItem href="/login">Login</NavItem>
  //         </Nav> */}
  //       {/* </Navbar.Collapse> */}
  //     </Navbar>
  //       {/* <Routes /> */}
  //   </div>
  // );
  return (
    <>
    <Navbar bg="light">
      <Container>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/map">Map</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
<Routes/>
</>
  )
}

export default App;