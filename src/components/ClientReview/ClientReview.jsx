import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Face from '../../assets/Images/face.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



 function ClientReview(){
    var settings = {
        dots: true,
        infinite: true,
        autoPlay:true,
        autoPlaySpeed:100,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <React.Fragment>
            <Container fluid={true} className='sliderBack text-center'>
            <h1 className="text-center reviewMainTitle pt-5">Client Reviews</h1>
                <div className="reviewBottomBorder">
                    <hr />
                </div>

                <Slider {...settings}>
                <div>
                <Row className='justify-content-center text-center'>
                    <Col lg={6} md={6} sm={6} >
                        <div className="serviceCard" style={{boxShadow:'none'}}>
                            <img src={Face} className='reviewImage' />
                            <h2 className="reviewTitle mt-2"  >Saba</h2>
                            <p className="reviewDescription">I will design and develop Saba online store website.</p>
                         </div>
                         
                    </Col>
                    
                </Row>
                </div>
                <div>
                <Row className='justify-content-center text-center'>
                    <Col lg={6} md={6} sm={6} >
                        <div className="serviceCard" style={{boxShadow:'none'}}>
                            <img src={Face} className='reviewImage' />
                            <h2 className="reviewTitle mt-2"  >Saba</h2>
                            <p className="reviewDescription">I will design and develop Saba online store website.</p>
                         </div>
                         
                    </Col>
                    
                </Row>
                </div>
                <div>
                <Row className='justify-content-center text-center'>
                    <Col lg={6} md={6} sm={6} >
                        <div className="serviceCard" style={{boxShadow:'none'}} >
                            <img src={Face} className='reviewImage' />
                            <h2 className="reviewTitle mt-2"  >Saba</h2>
                            <p className="reviewDescription">I will design and develop Saba online store website.</p>
                         </div>
                         
                    </Col>
                    
                </Row>
                </div>

                </Slider>
            </Container>
             
            
        </React.Fragment>
    )
}
export default ClientReview