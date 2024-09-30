import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppStore from "../assets/icons/app-store.png";
import GooglePlay from "../assets/icons/google-play.png";

const ReadyToGetStarted = () => {
  return (
    <div
      style={{
        backgroundColor: "#172C75",
        color: "white",
        borderRadius: "12px",
        padding: "40px 20px",
        margin: "0 8%",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col lg={6}>
            <h2 className="mb-3">Ready to get started?</h2>
            <p className="text-white">
              Create an account and instantly start accepting payments, selling
              your beautiful products online and building financial tools.
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="#">
                <img src={AppStore} alt="Google play" />
              </a>
              <a href="#">
                <img src={GooglePlay} alt="App store" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReadyToGetStarted;
