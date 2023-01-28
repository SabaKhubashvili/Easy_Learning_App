
import React from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap';



function TopBanner(){


    return(
        <React.Fragment>

            <Container fluid={true} className='topFixedBanner p-0'>

               <div className='topBannerOverlay'>
                    <Container className='topContent'>
                        <Row>
                            <Col className='text-center'>
                                <h1 className='topTitle'>Easy Learning</h1>
                                <h4 className='topSubtitle'>Learn Easy And Profesionally</h4>
                                <Button  variant='primary' className='mt-2'>Learn More</Button>
                            </Col>
                        </Row>
                    </Container>
               </div>
            </Container>

        </React.Fragment>
    )
}

export default TopBanner