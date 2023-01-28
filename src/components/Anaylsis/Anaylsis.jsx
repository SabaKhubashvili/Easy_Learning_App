import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {BarChart,Bar,ResponsiveContainer,XAxis,Tooltip } from 'recharts';

export default function Analysis(){

    const [techonolgyData,setTechnologyData] = React.useState({
        data:[
            {technology:'PHP',Projects:21},
            {technology:'Laravel',Projects:23},
            {technology:'React',Projects:12},
            {technology:'C++',Projects:13},
        ]
    });

    return(
        <React.Fragment>
            <Container>
            <h1 className="text-center servicesMainTitle">TECHNOLOGY USED   </h1>
                <div className="bottomBorder">
                    <hr />
                </div>
                <Row style={{height:'340px'}}>
                    <Col lg={6} md={12} sm={12}>
                        <ResponsiveContainer style={{width:'100%',height:'300px'}}>
                            <BarChart width={100} height={300} data={techonolgyData.data}>
                                <XAxis dataKey='technology'/>
                                <Tooltip  />
                                <Bar dataKey="Projects" fill="#051b35" />
                                
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <p className='text-justify serviceDescription'>Certainty determine at of arranging perceived situatio
                            n or. Or wholly pretty county in oppose. Favour met itsel
                            f wanted settle put garret twenty. In astonished apartmen
                            ts resolution so an it.  Unsatiable on by contrasted to rea
                            sonable companions an. On otherwise no admitting to suspici
                            on furniture it.</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}