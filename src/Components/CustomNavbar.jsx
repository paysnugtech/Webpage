import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/logo/logo.png";
import Flag from "../assets/icons/nigeria-flag.png";
import ReusableButton from "./ReusableButton";

const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className="d-inline-block align-top" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-flex align-items-center">
            <Nav.Link href="#personal" className="custom-nav-link active">
              Personal
            </Nav.Link>
            <Nav.Link href="#business" className="custom-nav-link">
              Business
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#company" className="custom-nav-link">
              Company
            </Nav.Link>
            <Nav.Link href="#help" className="custom-nav-link">
              Help
            </Nav.Link>
            <ReusableButton
              variant="primary"
              size="sm"
              className="rounded-5 mx-2 px-3 w-100"
              onClick={() => console.log("You are Now Shopping!")}
            >
              Get Started
            </ReusableButton>
            <Nav.Link href="#country" className="d-flex align-items-center">
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
