import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from '../../assets/Images/pdetails.png'



export default function ProjectDetails(){

    return(
        <React.Fragment>
            <Container className="text-center Project__Details">
                <Row>
                   <Col lg={6} md={12} sm={12}> 
                        <div className="project__imageContainer">
                            <img src={image} alt=""  />
                        </div>
                   </Col>
                   <Col lg={6} md={12} sm={12} className='Project__Description'> 
                        <h1 className="servicesTitle d-flex"  > 
                        PROJECT DETAILS
                        <hr style={{marginLeft:'20px',color:'#051b35'}} width='150px'  size='40px'/> 
                        </h1>
                        <p className="serviceDescription"> 
                        Debating me breeding be answered an he. Spoil event was words her off cause any. 
                        Tears woman which no is world miles woody. Wished be do mutual except in effect answer.
                        Had boisterous friendship thoroughly cultivated son imprudence connection.
                        Windows because concern sex its. Law allow saved views hills day ten.
                        Examine waiting his evening day passage proceed.
                        </p>

                        <div className="Project__Features">
                            <ul className="p-0" style={{display:'flex',flexWrap:'wrap'}}>
                                <li className="serviceDescription">Front-End</li>
                                <li className="serviceDescription">Back-End</li>
                                <li className="serviceDescription">Responsive</li>
                                <li className="serviceDescription">Cool Design</li>
                                <li className="serviceDescription">Accessable UI</li>
                            </ul>
                        </div>

                        <div className="Project__WebsiteLink mt-5">
                           <h6 className="serviceDescription"> Website Link: <a href="http://EasyLearning.com" target='_blank'>http://EasyLearning.com</a></h6>
                        </div>
                   </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}