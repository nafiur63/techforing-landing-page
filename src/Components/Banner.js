import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";

const Banner = () => {
  return (
    <Container>
      <div className="header-banner d-flex align-items-center">
        <Container>
          <div className="banner-text ">
            <h1 >Techforing Vulnarability scanner</h1>
            <p className="pop">
              THIRDEYE is an online vulnerability scanner that finds cyber
              security weaknesses in your digital infrastructure before the
              hackers do. Discover common web application vulnerabilities and
              server configuration issues.
            </p>
            <Form.Group>
              <Form.Row>
                <Col >
                  <Form.Control
                    className="mx-auto text-center bannerform"
                    size="lg"
                    type="text"
                    placeholder="https://www.example.com/"
                  />
                </Col>
                <Col>
                  <div className="mx-auto my-4">
                    <Form.Control
                      className="mx-auto text-center bannerform"
                      size="lg"
                      type="text"
                      placeholder="your email address"
                    />
                  </div>
                </Col>
              </Form.Row>
            </Form.Group>
            <Button variant="success" size="lg" type="submit">
              Free Scan
            </Button>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default Banner;
