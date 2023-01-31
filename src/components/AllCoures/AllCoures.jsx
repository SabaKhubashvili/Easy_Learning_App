import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Course1 from '../../assets/Images/pdetails.png'

export default function Courses(){

    return(
        <React.Fragment>
            <Container className="text-center" >
            <h1 className="text-center servicesMainTitle">MY COURSES</h1>
                <div className="bottomBorder">
                    <hr />
                </div>

                <Row>
                    <Col lg={6} md={12} sm={12} className='my-4 ' >
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="courseImg" src='https://img.freepik.com/free-photo/student-class-looking-course_23-2148888810.jpg?w=1380&t=st=1674831481~exp=1674832081~hmac=fe2caf3c0089452a017770545c4d8686a77096a1f93c9cd2a61fcf5a5786094a' />
                            </Col>
                            <Col lg={6} md={6} sm={12}  >
                                <div className="servicesTitle text-center" style={{textAlign:'left'}}>Laravel 8</div>
                                <div className="serviceDescription text-center" style={{textAlign:'left'}}>Literature admiration frequently indulgence announcing are who you her. Was least quick after six. So it yourself repeated together cheerful. Neither it cordial so painful picture studied if.</div>
                                <a href="#" className="viewAll">View All</a>
                           </Col>
                        </Row>
                    </Col>

                    <Col lg={6} md={12} sm={12} className='my-4' >
                        <Row>
                        <Col lg={6} md={6} sm={12}>
                                <img className="courseImg" src='https://img.freepik.com/free-photo/student-class-looking-course_23-2148888810.jpg?w=1380&t=st=1674831481~exp=1674832081~hmac=fe2caf3c0089452a017770545c4d8686a77096a1f93c9cd2a61fcf5a5786094a' />
                            </Col>
                            <Col lg={6} md={6} sm={12}  >
                                <div className="servicesTitle text-center" style={{textAlign:'left'}}>Laravel 8</div>
                                <div className="serviceDescription text-center" style={{textAlign:'left'}}>Literature admiration frequently indulgence announcing are who you her. Was least quick after six. So it yourself repeated together cheerful. Neither it cordial so painful picture studied if..</div>
                                <a href="#" className="viewAll">View All</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}