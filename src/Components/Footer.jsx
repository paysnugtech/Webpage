import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Facebook from "../assets/icons/facebook.png";
import Twitter from "../assets/icons/twitter.png";
import Instagram from "../assets/icons/instagram.png";
import Linkedin from "../assets/icons/linkedin.png";
import Youtube from "../assets/icons/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5 mt-5">
      <Container>
        <Row>
          {/* Products and Company Side by Side on xs and sm */}
          <Col xs={6} md={3}>
            <h6 className="mb-3">Products</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                {" "}
                <a href="#" className="text-decoration-none text-dark">
                  Personal Account
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-dark">
                  Business Account
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-dark">
                  Chatbot Payment
                </a>
              </li>
              <li className="mb-3">
                <a href="" className="text-decoration-none text-dark">
                  Bills Payment
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <h6 className="mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-dark">
                  About us
                </a>
              </li>
              <li className="mb-3">
                <a href="" className="text-decoration-none text-dark">
                  Blog
                </a>
              </li>
              <li className="mb-3">
                <a href="" className="text-decoration-none text-dark">
                  {" "}
                  Partnerships
                </a>
              </li>
              <li className="mb-3">
                <a href="" className="text-decoration-none text-dark">
                  {" "}
                  Careers
                </a>
              </li>
              <li className="mb-3">
                <a href="" className="text-decoration-none text-dark">
                  Contact us
                </a>
              </li>
            </ul>
          </Col>

          {/* Legal and Contact Us Side by Side on xs and sm */}
          <Col xs={6} md={3}>
            <h6 className="mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                {" "}
                <a href="#" className="text-decoration-none text-dark">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-dark">
                  AML Policy
                </a>
              </li>
              <li className="mb-3">
                <a href="" className="text-decoration-none text-dark">
                  Terms of Use
                </a>
              </li>
              <li className="mb-3">
                <a href="" className="text-decoration-none text-dark">
                  Cookies
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <h6 className="mb-3">Contact Us</h6>
            <address>
              Smarties Villa, Adjacent Splash FM <br />
              Felele, Ibadan, Nigeria
              <br />
              <a href="mailto:Hello@paysung.com">Hello@paysung.com</a>
              <br />
              +234 8102 4466 53
            </address>
            <div className="d-flex justify-content-start">
              <a href="#" className="text-dark me-2">
                <img src={Facebook} alt="facebook" />
              </a>
              <a href="#" className="text-dark me-2">
                <img src={Twitter} alt="twitter" />
              </a>
              <a href="#" className="text-dark me-2">
                <img src={Instagram} alt="instagram" />
              </a>
              <a href="#" className="text-dark me-2">
                <img src={Linkedin} alt="linkedin" />
              </a>
              <a href="#" className="text-dark">
                <img src={Youtube} alt="youtube" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <p className="text-muted small">
              Paysung, is a financial technology company, not a Bank. The
              banking/financial services offered on the Paysung platform are
              powered by our partner banks/financial institutions and follow all
              security standards and legal requirements prescribed by the
              partner banks/financial institution.
            </p>
            <p className="text-muted small">
              Paysung wallet is provided by VFD Microfinance Bank. VFD
              Microfinance Bank is licensed by the Central Bank of Nigeria. All
              deposits are insured by the Nigerian Deposit Insurance Corporation
              (NDIC).
            </p>
            <p className="text-muted small">
              All trademarks and brand names belong to their respective owners.
              Use of these trademarks and brand names does not represent
              endorsement by or association with Paysung technology limited.
              Google Play and the Google Play logo are registered trademarks of
              Google LLC. Apple, the Apple logo, and iPhone are registered
              trademarks of Apple Inc.
            </p>
            <p className="text-muted small text-center">
              Paysung Technology Limited; RC 1051227 All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
