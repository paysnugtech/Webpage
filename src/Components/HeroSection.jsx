import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeroImage from "../assets/images/image1.svg";
import AppStore from "../assets/icons/app-store.png";
import GooglePlay from "../assets/icons/google-play.png";

const HeroSection = () => {
  return (
    <div className="hero-section mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} lg={4}>
            <h1>Simplify Payments, Amplify Freedom</h1>
            <p>
              Connect, transact, and manage your finances effortlessly across
              Africa with hassle-free payments anytime, anywhere.
            </p>
            <div className="d-flex mt-5">
              <a href="#">
                <img src={AppStore} alt="Google play" />
              </a>
              <a href="#">
                <img src={GooglePlay} alt="App store" />
              </a>
            </div>
          </Col>
          <Col md={6} lg={5} className="mx-auto">
            <img src={HeroImage} alt="Mobile App" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
