import React from "react";
import { Container, Row,Col,Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image1 from '../../assets/Images/page1.png'
import Image2 from '../../assets/Images/page2.png'
import Image3 from '../../assets/Images/page3.png'



export default function RecentProject(){

    return(
        <React.Fragment>
            <Container className="text-center" >
            <h1 className="text-center servicesMainTitle">RECENT PROJECTS</h1>
                <div className="bottomBorder">
                    <hr />
                </div>
                <Row style={{justifyContent:'center',alignItems:'center'}}>
                    <Col lg={4} md={6} sm={12}>
                        <Card style={{ width: '18rem' }} className='mx-auto projectCard'>
                            <Card.Img variant="top" src={Image1} />
                            <Card.Body>
                                <Card.Title className="servicesTitle">Project 1</Card.Title>
                                <Card.Text className="serviceDescription">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Link to='/Project'> <Button variant="primary" className="mt-3"> Visit Website</Button></Link> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  lg={4} md={6} sm={12}>
                    <Card style={{ width: '18rem' }} className='mx-auto projectCard'> 
                            <Card.Img variant="top" src={Image2} />
                            <Card.Body>
                                <Card.Title className="servicesTitle">Project 2</Card.Title>
                                <Card.Text className="serviceDescription">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Link to='/Project'> <Button variant="primary" className="mt-3"> Visit Website</Button></Link> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  lg={4} md={6} sm={12}>
                         <Card style={{ width: '18rem' }} className='mx-auto projectCard'>
                            <Card.Img variant="top" src={Image3} />
                            <Card.Body>
                                <Card.Title className="servicesTitle">Project 3</Card.Title>
                                <Card.Text className="serviceDescription">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Link to='/Project'> <Button variant="primary" className="mt-3"> Visit Website</Button></Link> 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}