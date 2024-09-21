import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/paysnug-blue.svg";
import Flag from "../assets/icons/nigeria-flag.png";
import ReusableButton from "./ReusableButton";

const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            className="d-inline-block align-top"
            alt=""
            style={{ width: "140px", height: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-flex align-items-center">
            <Nav.Link
              as={Link}
              to="/personal"
              className="custom-nav-link active"
            >
              Personal
            </Nav.Link>
            <Nav.Link as={Link} to="/business" className="custom-nav-link">
              Business
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/company" className="custom-nav-link">
              Company
            </Nav.Link>
            <Nav.Link as={Link} to="/help" className="custom-nav-link">
              Help
            </Nav.Link>
            <ReusableButton
              variant="primary"
              size="sm"
              className="rounded-5 mx-2 px-3 w-100"
              onClick={() => console.log("Get Started!")}
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
