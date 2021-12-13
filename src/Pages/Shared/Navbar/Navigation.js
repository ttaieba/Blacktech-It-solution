import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">BlackTech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="About Us" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Our Company</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Our Vision</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Our Goal</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Go For MOre</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Contact Us</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Loging
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </div>
    );
};

export default Navigation;