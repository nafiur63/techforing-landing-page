import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const FreeTrial = () => {
    return (
        <Container fluid style={{backgroundColor:"#182F59"}}>

            <Row className="justify-content-md-center align-items-center py-5">
            
                <Col xs lg="4" >
                <div >
                        <img src="/images/dm.png" alt="desktop-mockup"/> 
                </div>
                </Col>
                <Col xs lg="5" > 
                        <div >
                            <h1 className="pt-5" style={{color:"white"}} >Ready to get started with your  30-day trial?</h1>
                        </div>
                        <div className="text-center py-5" ><Button className="px-5" style={{backgroundColor:"white",color:"#000000",fontSize:"1.5rem"}}>
                            Try for free 
                        </Button></div>
                        
                </Col>
                
            </Row>
        </Container>
    )
}

{/* <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row> */}



export default FreeTrial
