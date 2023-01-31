import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import designIcon from '../../assets/Images/design.png'
import ecommerceIcon from '../../assets/Images/ecommerce.png'
import webIcon from '../../assets/Images/web.png'

export default function AllServices(){
    
    return(
        <React.Fragment>
            <Container>
                <h1 className="text-center servicesMainTitle" style={{marginTop:'8rem '}}>MY SERVICES</h1>
                <div className="bottomBorder">
                    <hr />
                </div>

                <Row className="servicesContainer">
                    <Col lg={4} md={6} sm={12} className='text-center'>
                         <div className="serviceCard">
                            <img src={designIcon} className='serviceIcons' />
                            <h2 className="servicesTitle" >Web Design</h2>
                            <p className="serviceDescription">Qualified web design and attractive effects which chatches visitor's eye</p>
                         </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='text-center'>
                        <div className="serviceCard" >
                            <img src={ecommerceIcon} className='serviceIcons' />
                            <h2 className="servicesTitle"  >Ecommerce</h2>
                            <p className="serviceDescription">I will design and develop ecommerce online store website.</p>
                         </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='text-center'>
                        <div className="serviceCard" >
                            <img src={webIcon} className='serviceIcons' />
                            <h2 className="servicesTitle" >Web Development</h2>
                            <p className="serviceDescription">Clean and fresh issue free code to make your website dynamic perfectly.</p>
                         </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}