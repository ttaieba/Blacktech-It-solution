import React from 'react';

import img from '../../img/Technology Strategy graphic no background-03.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
const AboutUs = () => {
    return (
        <div>
            <Container className='p-4 bg-light'>
                <Row>
                    <Col> <img className='pb-3' src={img} alt="" /></Col>

                    <Col className='mt-5 pt-5'><h1 className='text-info  text-start '>About Us</h1>
                        <p className=' text-start '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet modi suscipit qui non minima beatae quod magni! Consectetur facilis quia, perferendis eum sapiente placeat. Quae pariatur
                            ad harum corporis.</p>
                        <div className='text-start'>


                            <Button type="button" class="btn btn-danger">About Us</Button>
                        </div>
                    </Col>




                </Row>

            </Container>

        </div>
    );
};

export default AboutUs;