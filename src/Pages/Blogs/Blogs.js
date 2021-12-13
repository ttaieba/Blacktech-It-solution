import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img from '../../img/blog2.jpg';
import img1 from '../../img/blog3.jpg';

const Blogs = () => {
    return (
        <div className='p-5'>
            <Container>
                <Row>
                    <Col>
                        <img className='w-75 ' src={img} alt="" />
                        <p>Posted on 18 Jun 2015 /  18906 Comments</p>
                        <h3>
                            INTEGER AT DIAM GRAVIDA FRINGILLA NIBH PRETI PURUS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo ex et vero at rem, consequatur, totam distinctio quos deserunt autem accusamus quis, voluptatum fuga molestiae ratione facilis ipsam iure?</p>

                        <Button variant="danger">Learn More </Button>
                    </Col>
                    <Col>
                        <img className='w-75' src={img1} alt="" />
                        <p>Posted on 18 Jun 2015 /  12293 Comments</p>
                        <h3>
                            AENEAN ACCUMSAN LIGULA DIAM</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, tenetur molestiae voluptatum quam, distinctio recusandae beatae laboriosam, aut officiis obcaecati veritatis? Placeat harum consectetur repudiandae nihil voluptatibus a, hic officiis?</p>

                        <Button variant="danger">Learn More </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;