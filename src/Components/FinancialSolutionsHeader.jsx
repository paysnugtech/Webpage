import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FinancialSolutionsHeader = () => {
  return (
    <Container fluid className="bg-light py-5 financial-header">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="text-center">
          <h4 className="mb-3">
            Empowering Africans with Advanced Financial Solutions
          </h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={5} className="text-center">
          <p>
            Embark on a Streamlined Financial Journey with Our Innovative and
            Accessible Services, Designed to Simplify Your Experience
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FinancialSolutionsHeader;
