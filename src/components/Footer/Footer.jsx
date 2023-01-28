import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faYoutube,faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,faPhone,faAddressCard} from '@fortawesome/free-solid-svg-icons'


export default function Footer(){
    return(
        <React.Fragment>
            <Container fluid={true} className='footerSection'>
                <Row>
                    <Col lg={3} md={6} sm={12} className='p-4 text-center'>
                        <h2 className="footerName">Follow Us</h2>
                        <div className="socialContainer" >
                            <a href="#"><FontAwesomeIcon icon={faFacebook} size='2x' style={{color:'#FFF'}}   /></a>
                            <a href="#"><FontAwesomeIcon icon={faYoutube} size='2x'  style={{color:'#FFF'}} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} size='2x'  style={{color:'#FFF'}} /></a>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='py-4 text-center'>
                        <h2 className="footerName">Adress</h2>
                        <p className="footerDesc">
                            <FontAwesomeIcon icon={faAddressCard}   style={{color:'#FFF'}} /> 6522 Baltimore National Pike CatonsMobile <br />
                            <FontAwesomeIcon icon={faEnvelope}  style={{color:'#FFF'}} />  Email: khubashvili.saba12@gmail.com <br />
                            <FontAwesomeIcon icon={faPhone}   style={{color:'#FFF'}} /> phone: 598 43 87 88
                        </p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='p-4 text-center'>
                         <h2 className="footerName">Information</h2>
                         
                         <a href="#" className="footerLinks" >About Me</a> <br />
                         <a href="#" className="footerLinks">Company Profile</a> <br />
                         <a href="#" className="footerLinks">Contact Us</a>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='p-4 text-center'  >
                    <h2 className="footerName">Policy</h2>

                    <a href="#" className="footerLinks">Refund Policy</a> <br />
                    <a href="#" className="footerLinks">Terms And Conditions</a> <br />
                    <a href="#" className="footerLinks">Previcy Policy</a> <br />
                    </Col>
                </Row>
                <div className="copyrightSection ">
                    <p className="m-0 copyrightText">© 2023 Tbilisi, Georgia, Inc. All Rights Reserved</p>
                </div>
            </Container>
        </React.Fragment>
    )
}