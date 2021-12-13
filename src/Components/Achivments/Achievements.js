import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../img/check-1.webp';
import img1 from '../../img/clock.webp';
import img2 from '../../img/coder-head-1.webp';
import img3 from '../../img/11.webp';

const Achievements = () => {
    return (
        <div className='p-5'>
            <Row>
                <Col md={3}>
                    <img src={img} alt="" />
                    <h4>Projects Completed</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia cum quis similique recusandae eos ut blanditiis voluptatibus inventore placeat expedita!
                    </p>
                </Col>
                <Col md={3}>
                    <img src={img1} alt="" />
                    <h4>Years of Experience</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia cum quis similique recusandae eos ut blanditiis voluptatibus inventore placeat expedita!
                    </p>
                </Col>
                <Col md={3}>
                    <img src={img2} alt="" />

                    <h4>IT Professionals</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia cum quis similique recusandae eos ut blanditiis voluptatibus inventore placeat expedita!
                    </p>
                </Col>
                <Col md={3}>
                    <img src={img3} alt="" />
                    <h4>Tech Partners</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia cum quis similique recusandae eos ut blanditiis voluptatibus inventore placeat expedita!
                    </p>
                </Col>
            </Row>
        </div >
    );
};

export default Achievements;