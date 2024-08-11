import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/logo/logo.png";
import Flag from "../assets/icons/nigeria-flag.png";
import ReusableButton from "./ReusableButton";

const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="fixed">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className="d-inline-block align-top" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-flex align-items-center">
            <Nav.Link href="#personal">Personal</Nav.Link>
            <Nav.Link href="#business">Business</Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#company">Company</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <ReusableButton
              variant="primary"
              size="sm"
              className="rounded-5 mx-2 px-3 w-100"
              onClick={() => console.log("You are Now Shopping!")}
            >
              Get Started
            </ReusableButton>
            <Nav.Link href="#shop" className="d-flex align-items-center">
              <img src={Flag} alt="" />
              <i className="arrow down"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
