import React from 'react';
import '../../HOme/Home.css';
import img from '../../../img/web.bg.webp'
import { Button, Col, Container, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='background '>
            <Container className='p-5'>
                <Row>
                    <Col className='mt-5'><h1 className='text-light  '>Services Responsive Website</h1>
                        <p className='text-warning '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet modi suscipit qui non minima beatae quod magni! Consectetur facilis quia, perferendis eum sapiente placeat. Quae pariatur
                            ad harum corporis.</p>
                        <div>
                            <Button className=' m-2 btn btn-primary' type="button">Primary</Button>

                            <Button type="button" class="btn btn-danger">Danger</Button>
                        </div>
                    </Col>
                    <Col> <img className='g-col-4' src={img} alt="" /></Col>



                </Row>

            </Container>
        </div>
    );
};

export default Header;