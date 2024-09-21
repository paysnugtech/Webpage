import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/images/image1.svg";
import AppStore from "../assets/icons/app-store.png";
import GooglePlay from "../assets/icons/google-play.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col xs={12} md={6} lg={4} className="mb-5 mb-md-0">
            <h1>Simplify Payments, Amplify Freedom</h1>
            <p className="mt-4 mb-4">
              Connect, transact, and manage your finances effortlessly across
              Africa with hassle-free payments anytime, anywhere.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start mt-3">
              <a href="#">
                <img src={AppStore} alt="App store" />
              </a>
              <a href="#">
                <img src={GooglePlay} alt="Google play" />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} lg={5} className="mx-auto">
            <img src={HeroImage} alt="Mobile App" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
