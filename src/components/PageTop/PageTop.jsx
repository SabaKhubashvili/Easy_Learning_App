import React from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap';


export default function PageTop(props){


    return(
        
        <React.Fragment>

        <Container fluid={true  } className='topPageBanner p-0'>

           <div className='topPageOverlay'>
                <Container className='PageContent'>
                    <Row>
                        <Col className='text-center'>
                            <h4 className='topPagetitle'>{props.title}</h4>
                        </Col>
                    </Row>
                </Container>
           </div>
        </Container>

    </React.Fragment>
    )
}