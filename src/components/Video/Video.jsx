import React from "react";
import { Container, Row,Col,Modal,Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer, {player,bigPlayButton} from 'react-player'



export default function Video(){


    const [show,setShow] = React.useState(false);


    function showModal(){
        setShow(true)
    }
    function handleClose(){
        setShow(false)
    }

    return(
        <React.Fragment>
            <Container className="text-center">
            <h1 className="text-center servicesMainTitle">OUR VIDEOS</h1>
                <div className="bottomBorder">
                    <hr />
                </div>
                <Row>
                    
                    <Col lg={6} md={6} sm={12} className='videoText'>
                        <p className="serviceDescription" style={{textAlign:'left'}}>Feet evil to hold long he open knew an n
                            o. Apartments occasional boisterous as soli
                            citude to introduced. Or fifteen covered we en
                            joyed demesne is in prepare. In stimulated my 
                            everything it literature. Greatly explain attempt perhaps in feeling h
                            e. House men taste bed not drawn joy
                            . Through enquire however do eq
                            ually herself at. Greatly way old may
                             you present improve. Wishing the feeling vil
                             lage him musical.</p>    
                    </Col>    
                    <Col lg={6} md={6} sm={12} className='videoCard' onClick={showModal}>
                         <FontAwesomeIcon icon={faVideoSlash} style={{fontSize:'50px'}} />
                    </Col>    
                </Row>    
            </Container>
            <Modal show={show} onHide={handleClose}>
                
                <Modal.Body>
                <div className='player-wrapper' style={{height:'400px'}}>
                    <ReactPlayer
                    playing={true}
                    className='react-player'
                    url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                    width='100%'
                    height='100%'
                    />
                </div>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}