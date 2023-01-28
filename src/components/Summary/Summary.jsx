import React from "react";
import {Container,Row,Col,Button} from 'react-bootstrap'
import CountUp from 'react-countup';


export default function Summary(){
    return(
        <React.Fragment>
            <Container fluid={true} className='summaryFixedBanner p-0'>
                <div className='summaryBannerOverlay'>            

                <Container  className='text-center'>
                    <Row>
                        <Col>
                            <Row className="countSection">
                                <Col lg={4} md={4} sm={12}>
                                    <h1 className='countNumber'>
                                        <CountUp start={0} end={3500} duration={2}>
                                        </CountUp> +</h1>
                                    <h4 className="countTitle">Students WorldWide</h4>  
                                    <hr className="bg-white w-30" />                              
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <h1 className='countNumber'> 
                                        <CountUp start={0} end={22} duration={2}>
                                        </CountUp> +
                                    </h1>
                                    <h4 className="countTitle">Course Published</h4>
                                    <hr className="bg-white w-30"/>      
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <h1 className='countNumber'>
                                        <CountUp start={0} end={300} duration={2}>
                                        </CountUp> +
                                    </h1>
                                    <h4 className="countTitle">Student Reviews</h4>
                                    <hr className="bg-white w-30"/>      
                                </Col>
                            </Row>
                        </Col>


                    </Row>
                </Container>
                </div>
            </Container>

        </React.Fragment>
    )
}