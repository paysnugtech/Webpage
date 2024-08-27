import React from "react";
import { Carousel, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Card Component with adjusted styling
const Card = ({ text, author }) => (
  <div className="card bg-white shadow-sm text-start mb-3 m-3 p-3 rounded-3 border-0">
    <div className="card-body">
      <p className="card-text">{text}</p>
      <h5 className="card-author text-center text-dark">{author}</h5>
    </div>
  </div>
);

// Carousel Wrapper Component
const CardCarousel = ({ items }) => {
  return (
    <Container>
      <Carousel
        indicators={false}
        controls={true}
        className="d-none d-lg-block"
        interval={null} // Prevent auto-sliding
      >
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around">
              <Col lg={5}>
                <Card
                  text={items[index % items.length].text}
                  author={items[index % items.length].author}
                />
              </Col>
              <Col lg={5}>
                <Card
                  text={items[(index + 1) % items.length].text}
                  author={items[(index + 1) % items.length].author}
                />
              </Col>
              <Col lg={5}>
                <Card
                  text={items[(index + 2) % items.length].text}
                  author={items[(index + 2) % items.length].author}
                />
              </Col>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Carousel className="d-lg-none">
        {/* Only show carousel on small screens */}
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <Card text={item.text} author={item.author} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CardCarousel;
