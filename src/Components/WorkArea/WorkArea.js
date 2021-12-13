import React from 'react';
import img from '../../img/1.webp'
import img1 from '../../img/3.webp'
import img2 from '../../img/list-2.webp'
import img3 from '../../img/6.webp'
import img4 from '../../img/7.webp'
import img5 from '../../img/8.webp'
import img7 from '../../img/4-2.webp'
import img8 from '../../img/steering-wheel-1.webp'
import { Col, Container, Row } from 'react-bootstrap';

const WorkArea = () => {
    return (
        <div className='p-4 background text-white'>
            <Container>
                <Row xs={2} md={4}>
                    <Col className='' >

                        <img src={img} alt="" />
                        <h4>Real Estate</h4>
                    </Col>
                    <Col className='' >

                        <img src={img1} alt="" />
                        <h4>Software</h4>
                    </Col>
                    <Col className='' >
                        <img src={img2} alt="" />
                        <h4>Retail</h4>
                    </Col>
                    <Col className='' >

                        <img src={img3} alt="" />
                        <h4>Education</h4>
                    </Col>
                    <Col className='' >

                        <img src={img4} alt="" />
                        <h4>Startup</h4>
                    </Col>
                    <Col className='' >

                        <img src={img5} alt="" />
                        <h4>E-com</h4>
                    </Col>

                    <Col className='' >

                        <img src={img7} alt="" />
                        <h4>Non-Profit</h4>
                    </Col>
                    <Col className='' >

                        <img src={img8} alt="" />
                        <h4>Automotive</h4>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default WorkArea;