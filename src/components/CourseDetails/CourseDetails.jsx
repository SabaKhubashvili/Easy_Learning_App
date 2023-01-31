import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseImg from '../../assets/Images/Course.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faClock,faClipboardList,faClone,faTags,faClipboardUser } from '@fortawesome/free-solid-svg-icons'
import CourseFilter from "./CourseFilter";



export default function CourseDetails(){

    return(
        <React.Fragment>
            <Container className="mt-4 Course__Description">
                <Row>
                    <Col lg={8} md={12} sm={12}>
                        <h1 className="servicesTitle Course__Main_title pb-4 mt-0" style={{fontWeight:'800'}} >Fox Nymphs Grab Quick-jived Waltz. Brick Quiz Whangs</h1>
                        <div className="Course__ImageContainer">
                            <img src={CourseImg} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div className="Course__Sidebar">
                            <h4 className="Course_Features_Title">Course Features</h4>
                          

                            <div className="Course__Information">
                                <ul className="Course__Information_List px-1">
                                    <li> <FontAwesomeIcon icon={faUser} />
                                     <span>Enrolled: </span> 
                                      1200 students
                                     </li>
                                    <li><FontAwesomeIcon icon={faClock} />
                                    <span>Duration: </span>
                                    2 hours
                                    </li>
                                    <li><FontAwesomeIcon icon={faClipboardList} />
                                    <span>Lectures: </span>
                                    8
                                    </li>
                                    <li><FontAwesomeIcon icon={faClone} />
                                    <span>Categories: </span>
                                    Technology
                                    </li>
                                    <li><FontAwesomeIcon icon={faTags} />
                                    <span>tags: </span>
                                    Android, Javascript
                                    </li>
                                    <li><FontAwesomeIcon icon={faClipboardUser} />
                                    <span>Instructor: </span>
                                    David Laid
                                    </li>
                                </ul>

                                <div className="Course__Sidebar_Bottom text-center">
                                    <h4><span className="Course__Price">Price: </span>$54.00</h4>
                                    <button>ENROLL COURSE</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

           <div className="Course__Bottom mt-4">
            <CourseFilter/>
            
           </div>
        </React.Fragment>
    )
}