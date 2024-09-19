import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ReusableComponent = ({ title, description, imageSrc, reverse }) => {
  return (
    <Container fluid className="bg-light py-3 ">
      <Row
        className={`align-items-center text-center text-md-start ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <Col md={6} lg={4} className="mx-auto">
          <h4 className="mb-4">{title}</h4>
          <p>{description}</p>
        </Col>
        <Col md={6} lg={4} className="mx-auto">
          <Image src={imageSrc} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default ReusableComponent;
