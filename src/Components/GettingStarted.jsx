import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import User from "../assets/icons/user.svg";
import Badge from "../assets/icons/badge.svg";

const GettingStarted = () => {
  return (
    <Container className="text-center mt-5 mb-5 bg-light-gray">
      <h3>Getting Started with Paysnug</h3>
      <p>There's so much we offer. Begin your journey in 3 simple steps now.</p>
      <Row className="justify-content-center mt-4 g-4">
        <Col md={4} lg={3}>
          <Card className="shadow-sm border-0 rounded-3">
            <Card.Body>
              <div className="mb-3">
                <img src={User} alt="user" />
              </div>
              <Card.Title>Create your account</Card.Title>
              <Card.Text>
                Let's get started! Sign up for your Paysnug account in just a
                few easy steps.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={3}>
          <Card className="shadow-sm border-0 rounded-3">
            <Card.Body>
              <div className="mb-3">
                <img src={Badge} alt="complaint-badge" />
              </div>
              <Card.Title>Stay Compliant</Card.Title>
              <Card.Text>
                Ensure everything is in order with our straightforward
                compliance process for your peace of mind.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={3}>
          <Card className="shadow-sm border-0 rounded-3">
            <Card.Body>
              <div className="mb-3">
                <img src={User} alt="" />
              </div>
              <Card.Title>Start Transacting</Card.Title>
              <Card.Text>
                Congratulations! You're all set to start sending and receiving
                payments hassle-free through Paysnug.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GettingStarted;
