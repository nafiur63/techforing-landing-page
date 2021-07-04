import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ThirdEyeFeatures = () => {
    return (
        <div>
            <Container>
                <Row className="">
                    <Col md={5} className="ps-md-5 my-auto " >
                        <img src="/images/desktop.png" className="img-fluid" alt="desktop"/>
                    </Col>
                    <Col md={7} className="my-5 order-first order-md-last text-center">
                    <div className="some-border mb-2"></div>
                        <h1>Features of Thirdeye</h1>
                        <p>Facilities you will get using this scanner</p>
                        <Row className="d-flex">
                            <Col sm={6}>
                                <div className="text-box-card m-2 p-3" >
                                    <img src="/images/scan.png" alt="scan"/>
                                    <p>Automate your scan</p>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="text-box-card m-2 p-3">
                                    <img src="/images/smartobject.png" alt="scan"/>
                                    <p>Invite your other organization  users</p>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="text-box-card m-2 p-3">
                                    <img src="/images/team.png" alt="scan"/>
                                    <p>Work together with  programmer and Developer</p>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="text-box-card m-2 p-3">
                                    <img src="/images/report.png" alt="scan"/>
                                    <p>Automate your scan</p>
                                </div>
                            </Col>
                            <Col sm={12} className="d-sm-flex justify-content-center">
                                <div className="text-box-card m-2 p-3">
                                    <img src="/images/vulnerability.png" alt="scan"/>
                                    <p>Find the most common  vulnerabilities</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ThirdEyeFeatures


// order-1.order-md-2