import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fidelity from "../assets/logo/fidelity.png";
import Providus from "../assets/logo/providus.png";
import Fidesic from "../assets/logo/fidesic.png";
import Mastercard from "../assets/logo/master-card.png";

const OurPartners = () => {
  return (
    <Container className="text-center my-5">
      <h5 className="mb-4">Our Partners</h5>
      <Row className="justify-content-center">
        <Col xs={5} md={2}>
          <img src={Fidelity} alt="FidelityBank" className="img-fluid" />
        </Col>
        <Col xs={6} md={2}>
          <img src={Providus} alt="ProvidusBank" className="img-fluid" />
        </Col>
        <Col xs={6} md={2}>
          <img src={Fidesic} alt="Fidesic" className="img-fluid" />
        </Col>
        <Col xs={2} md={1}>
          <img src={Mastercard} alt="Mastercard" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default OurPartners;
