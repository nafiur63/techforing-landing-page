import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ThirdEyeLooks = () => {
  return (
    <div>
      <Container>
      <div className="some-border mb-3"></div>
        <h1 className="text-center mb-5">What Thirdeye looks for on your site</h1>
        <div className="px-3">
        <Row>
          <Col sm={6} xs={12}>
            <div className="d-flex my-3">
                <div ><img src="/images/clipboard.png"  alt="clipboard" /></div>
              <div className="ms-2">
                <h4>Self-Security Assessment</h4>
                <p>
                  You can perform a self-security assessment in order to detect
                  weaknesses in your own application. This will allow you to fix
                  the vulnerabilities before being hit by real attackers.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={6} xs={12}>
            <div className="d-flex my-3">
            <div><img src="/images/paper.png"  alt="clipboard" /></div>
              <div className="ms-2">
                <h4>Ongoing Vulnerability Management</h4>
                <p>
                Schedule scans for weekly or monthly reports. 
Configure report to alert on changes to vulnerability 
count.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={6} xs={12}>
            <div className="d-flex my-3">
            <div><img src="/images/eye.png" alt="clipboard" /></div>
              <div className="ms-2">
                <h4>Comprehensive Vulnerability Discovery</h4>
                <p>
                Detect a wide range of network service and web 
application vulnerabilities across any Internet
facing system.

                </p>
              </div>
            </div>
          </Col>
          <Col sm={6} xs={12}>
            <div className="d-flex my-3">
            <div><img src="/images/real-time.png" alt="clipboard" /></div>
              <div className="ms-2">
                <h4>Real Time Risk Visibility</h4>
                <p>
                Detailed reports that include vulnerability severity 
with technical details of immediate value to the user.

                </p>
              </div>
            </div>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
};

export default ThirdEyeLooks;
