import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Resources = () => {
  return (
    <div className="my-5">
      <Container className="text-center">
      <div className="some-border mb-2"></div>
        <h1 className="mb-4">Resources</h1>
        <Row>
          <Col md={4}>
            <div >
              <h3 className="my-2" >Guides</h3>
              <div className="some-border"></div>
              <div className="resource-card mt-4">
                <Card>
                  <img className="card-image" src="/images/mobile.png" alt="" />
                  <Card.Body
                    style={{ backgroundColor: "#F3F7FC" }}
                    className="text-start"
                  >
                    <Card.Text>
                      Follow our helpful guides and tutorials to learn how to
                      use thirdeye{" "}
                    </Card.Text>
                    <Button className="p-2 rounded buttons"  variant="primary">
                      Learn more
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div >
              <h3 className="my-2" >Tips & Tricks</h3>
              <div className="some-border"></div>
              <div className="resource-card mt-4">
                <Card>
                  <img className="card-image" src="/images/mobile.png" alt="" />
                  <Card.Body
                    style={{ backgroundColor: "#F3F7FC" }}
                    className="text-start"
                  >
                    <Card.Text>
                      Follow our helpful guides and tutorials to learn how to
                      use thirdeye{" "}
                    </Card.Text>
                    <Button className="p-2 rounded buttons"  variant="primary">
                      Learn more
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div >
              <h3 className="my-2" >Blog</h3>
              <div className="some-border"></div>
               <div className="resource-card mt-4">
                <Card>
                  <img className="card-image" src="/images/mobile.png" alt="" />
                  <Card.Body
                    style={{ backgroundColor: "#F3F7FC" }}
                    className="text-start"
                  >
                    <Card.Text>
                      Follow our helpful guides and tutorials to learn how to
                      use thirdeye{" "}
                    </Card.Text>
                    <Button className="p-2 rounded buttons"  variant="primary">
                      Learn more
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resources;
