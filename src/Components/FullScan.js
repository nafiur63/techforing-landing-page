import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const FullScan = () => {
  return (
    <Container className="text-center my-5">
      <div className="fullscanebox mb-5">
      <div className="some-border mb-3"></div>
        <h2 className="fw-bolder">WANT A FULL SCAN?</h2>
        <div className="fullscantext my-3">
          Website Vulnerability Free scan performs a passive web security scan
          in order to detect issues like: outdated server software, insecure
          HTTP headers, insecure cookie settings and a few others. We recommend
          doing a Full Scan for a comprehensive website assessment which
          includes detection of SQL Injection, XSS, Local File Inclusion, OS
          Command Injection and more.
        </div>
        <Button style={{ backgroundColor: "#182F59" }} className="my-4 px-5">
          FULL SCAN
        </Button>
      </div>
      <div>
        <Row>
          <Col className="text-start" md={4} xs={12}>
            <h2>Sample Report</h2>
            <p>Here is a Website Vulnerability Scanner sample report:</p>
            <ul>
              <li>
                The report starts with a quick summary of the findings and risk
                ratings
              </li>
              <li>
                Each finding has a detailed explanation in terms of risk and
                recommendations
              </li>
              <li>The vulnerabilities are ordered by the risk level</li>
            </ul>
          </Col>
          <Col md={8} xs={12}>
            <img className="img-fluid" src="/images/4.png" alt="4" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FullScan;
