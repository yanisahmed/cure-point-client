import { faAngleRight, faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Footer.css';
const Footer = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <footer>
            <div className="main-footer bg-theme-secondary text-white pt-4">
                <Container>
                    <Row className="pb-4">
                        <Col lg={3}>
                            <div>
                                <h4 className="fs-5 text-uppercase">Get in Touch</h4>
                            </div>
                            <div className="get-in-touch">
                                <p className="get-in-intro">We are Bangladesh based medical support company. We are dedicated and promised to deliver quality medical service </p>
                                <ul className="list-unstyled">
                                    <li><FontAwesomeIcon icon={faMapMarker} className="me-4" /> 25 street avenue, Gulshan</li>
                                    <li><FontAwesomeIcon icon={faEnvelope} className="me-4" /> mail@curepoint.com</li>
                                    <li><FontAwesomeIcon icon={faPhone} className="me-4" /> (+088) 555 222 111</li>

                                </ul>

                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <h4 className="fs-5 text-uppercase">Quick Links</h4>
                                <div className="quick-link">
                                    <ul className="list-unstyled">
                                        <li>
                                            <span className="me-4"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></span>
                                            <a className="text" href="/">Home</a>
                                        </li>
                                        <li>
                                            <span className="me-4"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></span>
                                            <a className="text" href="/">Services</a>
                                        </li>
                                        <li>
                                            <span className="me-4"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></span>
                                            <a className="text" href="/">Login</a>
                                        </li>
                                        <li>
                                            <span className="me-4"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></span>
                                            <a className="text" href="/">Register</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <h4 className="fs-5 text-uppercase">Our Services</h4>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <h4 className="fs-5 text-uppercase">Newsletter</h4>
                            </div>

                            <div>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="newsletterName">
                                        <Form.Control {...register("name")} type="text" placeholder="Enter Your Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="newsletterEmail">
                                        <Form.Control {...register("email")} type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant="info" type="submit">
                                        Submit
                                    </Button>
                                </Form>
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