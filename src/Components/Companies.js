import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Companies = () => {
  return (
    <>
      <Container className="my-5">
        <div className="text-center mb-4">
          <h4 className="fw-bolder">TRUSTED BY TELECOM COMPANIES LIKE</h4>
        </div>
        <Row className="p-2 align-items-center mt-5">
          <Col class="mr-md-1 " xs={6} md={4} lg={2}>
            <img className="img-fluid" src="/images/wtmob.png" alt="dcimob" />
          </Col>
          <Col class="mr-md-1 " xs={6} md={4} lg={2}>
            <img
              className="img-fluid"
              src="/images/gurusmob.png"
              alt="dcimob"
            />
          </Col>
          <Col class="mr-md-1" xs={6} md={4} lg={2}>
            <img className="img-fluid" src="/images/dcimob.png" alt="dcimob" />
          </Col>
          <Col class="mr-md-1 " xs={6} md={4} lg={2}>
            <img className="img-fluid" src="/images/aalmob.png" alt="dcimob" />
          </Col>
          <Col class="mr-md-1" xs={6} md={4} lg={2}>
            <img className="img-fluid" src="/images/nsemob.png" alt="dcimob" />
          </Col>
          <Col class="mr-md-1 " xs={6} md={4} lg={2}>
            <img className="img-fluid" src="/images/dfmob.png" alt="dcimob" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Companies;
