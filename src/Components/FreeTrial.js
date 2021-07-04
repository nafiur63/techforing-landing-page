import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const FreeTrial = () => {
  return (
    <div className="mb-5">
    <Container fluid style={{ backgroundColor: "#182F59" }}>
      <Row className="justify-content-md-center align-items-center py-5">
        <Col xs lg="4">
          <div className="text-center">
            <img className="ms-xs-2 ml-sm-0" src="/images/dm.png" alt="desktop-mockup" />
          </div>
        </Col>
        <Col xs lg="5">
          <div>
            <h1 className="pt-5" style={{ color: "white",textAlign:"center" }}>
              Ready to get started with your 30-day trial?
            </h1>
          </div>
          <div className="text-center py-5">
            <Button
              className="px-5"
              variant="outline-dark"
              style={{
                backgroundColor: "white",
                color: "#000000",
                fontSize: "1.5rem",
              }}
            >
              Try for free
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    </div>

  );
};


export default FreeTrial;
