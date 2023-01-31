import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WelcomeImg1 from '../../assets/Images/page1.png'
import WelcomeImg2 from '../../assets/Images/page2.png'
import WelcomeImg3 from '../../assets/Images/page3.png'


export default function Welcome(){
    return(
        <React.Fragment>
            <div className="intro-area--top">
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12 }>
                            <div className="section-title text-center">
                                <div className="intro-area--inner">
                                    <h6 className="sub-title double-line " > WELCOME <hr /> </h6>
                                    <h2 className="main-Title">
                                        An Exemplary 
                                        <br />
                                        Learning Community
                                    </h2>

                                    <Container>
                                        <Row className="justify-content-center">
                                            <Col lg={4} md={6} sm={12}>
                                                <div className="Welcome__backgroundImage">
                                                    <img src={WelcomeImg1} alt=""  />    
                                                </div>                                
                                                <div className="welcomeInfo">
                                                    <h5  className="servicesTitle">Hello</h5>
                                                    <h6 className="serviceDescription">Lorem Ipsum</h6>
                                                </div>                
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                 <div className="Welcome__backgroundImage">
                                                    <img src={WelcomeImg2} alt=""  />    
                                                 </div>
                                                 <div className="welcomeInfo">
                                                    <h5  className="servicesTitle">Hello</h5>
                                                    <h6 className="serviceDescription">Lorem Ipsum</h6>
                                                </div>        
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                  <div className="Welcome__backgroundImage">
                                                    <img src={WelcomeImg3} alt=""  />    
                                                  </div>
                                                  <div className="welcomeInfo">
                                                    <h5 className="servicesTitle">Hello</h5>
                                                    <h6 className="serviceDescription">Lorem Ipsum</h6>
                                                </div>        
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}