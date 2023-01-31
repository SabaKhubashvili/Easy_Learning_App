import React from "react";
import { Col, Container, Row,Form,Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs(){

    return(
        <React.Fragment>
            <Container className="contactUs">
                <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Col lg={6} md={6} sm={12} style={{height:'450px'}}>
                        <h1 className="serviceTitle">Qucik Contact</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />

                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />

                                <Form.Label>Message</Form.Label>
                                <Form.Control  as='textarea' rows='5'  placeholder="Enter Content" className="contactTextarea" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceTitle"> Discuiss Now</h1>
                        <p className="">
                            <FontAwesomeIcon icon={faAddressCard} /> 6522 Baltimore National Pike CatonsMobile <br />
                            <FontAwesomeIcon icon={faEnvelope}/>  Email: khubashvili.saba12@gmail.com <br />
                            <FontAwesomeIcon icon={faPhone} /> phone: 598 43 87 88
                        </p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}