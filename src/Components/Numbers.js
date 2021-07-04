import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Numbers = () => {
    return (
        <div style={{backgroundColor:"#F7F7FD",margin:"1rem 0 1rem 0",padding:"1rem 0 1rem 0"}}>
            <Container>
                <Row>
                    <Col md={3} xs={6} className="text-start py-sm-3 px-5 my-sm-0 my-4">
                        <div className="d-sm-flex">
                            <img className="img-fluid ps-2 me-1" src="/images/checkmark.png" alt=""/>
                            <h2 className="text-sm-end fs-1 " >100%</h2>
                        </div>
                        <h4>Guaranteed</h4>
                    </Col>
                    <Col md={3} xs={6} className="text-start py-sm-3 px-5 my-sm-0 my-4">
                        <div className="d-sm-flex ">
                            <img className="img-fluid ps-2 me-1" src="/images/customer.png" alt=""/>
                            <h2 className="text-sm-end fs-1">700k+</h2>
                        </div>
                        <h4>Satisfied Clients</h4>
                    </Col>
                    <Col md={3} xs={6} className="text-start py-sm-3 px-5 my-sm-0 my-4">
                        <div className="d-sm-flex">
                            <img className="img-fluid ps-2 me-1" src="/images/zoom.png" alt=""/>
                            <h2 className="text-sm-end fs-1">500</h2>
                        </div>
                        <h4>Sites scanned daily</h4>
                    </Col>
                    <Col md={3} xs={6} className="text-start py-sm-3 px-5 my-sm-0 my-4">
                        <div className="d-sm-flex mb-1">
                            <img className="img-fluid ps-2 me-1" src="/images/report.png" alt=""/>
                            <h2 className="text-sm-end fs-1">100%</h2>
                        </div>
                        <h4>Authenticate Report Generate</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Numbers
