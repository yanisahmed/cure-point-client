import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="main-footer bg-theme-secondary text-white pt-4">
                <Container>
                    <Row className="pb-4">
                        <Col lg={3}>
                            <div>
                                <h4 className="fs-6">Get in Touch</h4>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <h4 className="fs-6">Quick Links</h4>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <h4 className="fs-6">Our Services</h4>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <h4 className="fs-6">Enquiry Form</h4>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className="footer-bottom bg-theme-primary">
                <Container>
                    <Row className="bg-gray">
                        <Col className="p-2 text-center text-theme-primay">&copy;2020-2025</Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;