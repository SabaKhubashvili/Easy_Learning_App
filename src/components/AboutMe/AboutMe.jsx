import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Face from '../../assets/Images/face.png'
import ITyped from 'react-ityped';

export default function AboutMe(){
   
    const strings = ['Work As Front End Developer!','Work As Back End Developer!']
    
    return(
        
        <React.Fragment>
            <Container >
            <h1 className="text-center servicesMainTitle">ABOUT ME</h1>
                <div className="bottomBorder">
                    <hr />
                </div>
                <Row>
                    <Col lg={6} md={6} sm={12} style={{display:'flex',}}>
                        <img src={Face} alt="" className="aboutMeImg mx-auto"/>
                    </Col>

                    <Col lg={6} md={6} sm={12} className='text-center aboutMeInfo'>
                        <div className="aboutMeDesc">Hi There, I,m</div>
                        <div className="aboutMeName">Saba</div> 
                         <div className="aboutMeDesc" style={{height:'60px'}}> 
                            <ITyped className='container ityped-cursor'
                        showCursor={false}
                        strings={strings}
                        typeSpeed={50}
                        backSpeed={50}
                        startDelay={0}
                        backDelay={250}
                        
                    /></div>
                    
                    </Col>
                    
                </Row>
            </Container>


        </React.Fragment>
    )
}