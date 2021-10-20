import { faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <section className="section-notfound">
            <Container>
                <Row>
                    <Col>
                        <div className="not-found-wrapper d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <p className="fs-1 fw-bold">404</p>
                                <p>Sorry! The page you are looking for is not available.</p>
                                <div className="my-4">
                                    <span className="text-info text-center me-2"><FontAwesomeIcon icon={faFacebook} /> </span>
                                    <span className="text-info text-center me-2"><FontAwesomeIcon icon={faTwitter} /> </span>
                                    <span className="text-info text-center me-2"><FontAwesomeIcon icon={faPinterest} /> </span>
                                </div>
                                <Link to="/"><Button variant="info" className="px-4 border-0 mb-4">Go Home</Button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NotFound;