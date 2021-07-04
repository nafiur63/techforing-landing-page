import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <Container>
                <Row>

                </Row>
                <Row>
                    <Col className="d-none d-md-block" >
                    <Button className="footerButton rounded ml-5">
                        {/* <img className="img-fluid" src="/images/rightarrow.png" alt="right arrow"/> */}
                    Create an account or login
                    </Button>
                    </Col>
                    <Col md={6} className="text-md-end text-center">
                    <p>Copyright @ 2021 Techforing Ltd.</p>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
