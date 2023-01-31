import React from "react";
import { Col, Container, Row,Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ReactImg from '../../assets/Images/react.png'
import TypescriptImg from '../../assets/Images/typescript.png'
import laravelImg from '../../assets/Images/laravel.png'

export default function CourseFilter(){

    const [filter,setFilter] = React.useState({
        content:'Desc',
        visible:''
    });
    

    function handleFilter(Desc){
        setFilter(PrevFilter=>({
            ...PrevFilter,
            content:Desc
        }))

    }

    const Desc__button = {
        border:" 1px solid #CBD6E2",
        padding:" 10px 0",
        textAlign: "center",
        color: "#051b35",
        fontFamily:" 'Monserrat',sans-serif",
        fontWeight: "700",
        cursor:'pointer',
    }

    return(
        <React.Fragment>
            <Container className="Course__Description__Bottom">
                <Row>
                    <Col lg={3} md={3} sm={6}
                        style={Desc__button} 
                        className={filter.content == "Desc" ? 'active' : ''} 
                        onClick={()=>handleFilter('Desc')}>
                        <div>Description</div>
                    </Col>
                    <Col lg={3} md={3} sm={6} 
                    style={Desc__button}
                    onClick={()=>handleFilter('Curriculum')}
                    className={filter.content == "Curriculum" ? 'active' : ''} >
                        <div >Curriculum</div>
                    </Col>
                    <Col lg={3} md={3} sm={6}  style={Desc__button}
                    onClick={()=>handleFilter('FAQ')}
                    className={filter.content == "FAQ" ? 'active' : ''}
                    >
                        <div >FAQ</div>
                    </Col>
                    <Col lg={3} md={3} sm={6}  style={Desc__button}
                    onClick={()=>handleFilter('Review')}
                    className={filter.content == "Review" ? 'active' : ''}>
                        <div>Review</div>
                    </Col>
                </Row>
            </Container>

            <Container style={{height:'100%'}}>
             {filter.content=='Desc' && <div className="Description__Full mt-2">
                    <div className="serviceDescription">
                    The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.
                    </div>
                    <ul className="mt-4 d-flex p-0" style={{flexWrap:'wrap',width:'500px'}}>
                        <li>Desc1</li>
                        <li>Desc2</li>
                        <li>Desc3</li>
                        <li>Desc4</li>
                        <li>Desc5</li>
                        <li>Desc6</li>
                        <li>Desc7</li>
                        <li>Desc8</li>
                        <li>Desc9</li>
                    </ul>
            </div>}
            {filter.content == 'Curriculum' && 
            <div className="Curriculum__Full mt-4">
                <div className="question">
                    <div className="servicesTitle">What You Will Learn</div>
                    <div className="answer">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.</div>
                    <hr />
                </div>

                <div className="Curriculum_ImagesContainer d-flex mt-3" style={{justifyContent:'space-around'}}>
                    <div className="img">
                        <img src={ReactImg} alt="" width='120px'/>
                        <div className="serviceDescription text-center">
                            React
                        </div>
                    </div>
                    <div className="img">
                        <img src={laravelImg} alt="" width='120px'/>
                        <div className="serviceDescription text-center">
                            Laravel
                        </div>
                    </div>
                    <div className="img">
                        <img src={TypescriptImg} alt="" width='120px'/>
                        <div className="serviceDescription text-center">
                            Typescript
                        </div>
                    </div>
                </div>
            </div>
                }
            {filter.content == 'FAQ' && 
            <div className="Curriculum__Full mt-2">
                <div className="question">
                    <div className="servicesTitle">Question 1</div>
                    <div className="answer">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab</div>
                    <hr />
                </div>
                <div className="question">
                    <div className="servicesTitle">Question 2</div>
                    <div className="answer">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab</div>
                    <hr />
                </div>
                <div className="question">
                    <div className="servicesTitle">Question 3</div>
                    <div className="answer">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab</div>
                    <hr />
                </div>
                <div className="question">
                    <div className="servicesTitle">Question 4</div>
                    <div className="answer">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab</div>
                    <hr />
                </div>
            </div>
                }

                {filter.content == 'Review' && <div className="Review_Full mt-5">
                    
                    <Container style={{maxWidth:'500px',border:'1px solid black',padding:'40px 20px'}}>
                        <Row>
                            <Col lg={6} md={6} sm={12} className='text-center'>
                                <h1 style={{color:'#051b35',fontWeight:'800'}}>5.0</h1>
                                <FontAwesomeIcon icon={faStar} color="#FDC800" />
                                <FontAwesomeIcon icon={faStar} color="#FDC800"  />
                                <FontAwesomeIcon icon={faStar} color="#FDC800"  />
                                <FontAwesomeIcon icon={faStar} color="#FDC800"  />
                                <FontAwesomeIcon icon={faStar} color="#FDC800"  />
                                <div className="serviceDescription">Rated 5 out of 3</div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="single_review d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faStar} color="#FDC800"  />
                                    <div className="line" style={{marginLeft:'10px',width:'40%',backgroundColor:'#FDC800',height:'5px',borderRadius:'20px'}} />
                                    <span style={{fontWeight:'700',marginLeft:'10px'}}>100%</span>
                                </div>
                                <div className="single_review d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faStar} color="#FDC800"  />
                                    <div className="line" style={{marginLeft:'10px',width:'40%',backgroundColor:'#E9ECEF',height:'5px',borderRadius:'20px'}} />
                                    <span style={{fontWeight:'700',marginLeft:'10px'}}>0%</span>
                                </div>
                                <div className="single_review d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faStar} color="#FDC800"  />
                                    <div className="line" style={{marginLeft:'10px',width:'40%',backgroundColor:'#E9ECEF',height:'5px',borderRadius:'20px'}} />
                                    <span style={{fontWeight:'700',marginLeft:'10px'}}>0%</span>
                                </div>
                                <div className="single_review d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faStar} color="#FDC800"  />
                                    <div className="line" style={{marginLeft:'10px',width:'40%',backgroundColor:'#E9ECEF',height:'5px',borderRadius:'20px'}} />
                                    <span style={{fontWeight:'700',marginLeft:'10px'}}>0%</span>
                                </div>
                                <div className="single_review d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faStar} color="#FDC800"  />
                                    <div className="line" style={{marginLeft:'10px',width:'40%',backgroundColor:'#E9ECEF',height:'5px',borderRadius:'20px'}} />
                                    <span style={{fontWeight:'700',marginLeft:'10px'}}>0%</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div> }
            </Container>

        </React.Fragment>
    )
}