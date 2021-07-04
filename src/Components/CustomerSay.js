import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CustomerSay = () => {
  return (
    <div className="mt-4" style={{marginBottom:"10rem",position:"static"}}>
      <Container>
        <div className="some-border mb-2"></div>
        <h1 className="text-center my-1">WHAT OUR CUSTOMERS SAY</h1>
        <Row>
          <Col md={6}>
            <div className="customer-box" style={{position:"relative"}}>
              <div className="text-center" style={{ backgroundColor: "#F3F7FC",padding:"3rem 1rem 3rem 1rem",margin:"4rem 3rem 0 3rem" }} >
                <img   src="/images/quote.png" alt="quote" />
                <p  >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="woman" >
                  <img  src="/images/layer1.png" alt="woman"/>
                  <div className="text-center">
                  <h3 >Al James, CTO</h3>
                  <p>Ometria</p>
                  </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{position:"relative"}}>
              <div className="text-center" style={{ backgroundColor: "#F3F7FC",padding:"3rem 1em 3rem 1rem",margin:"4rem 3rem 0 3rem" }} >
                <img   src="/images/quote.png" alt="quote" />
                <p  >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="woman" >
                  <img  src="/images/layer1.png" alt="woman"/>
                  <div className="text-center">
                  <h3 >Al James, CTO</h3>
                  <p>Ometria</p>
                  </div>
              </div>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default CustomerSay;
