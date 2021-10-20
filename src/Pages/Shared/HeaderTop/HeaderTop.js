import { faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderTop.css';

const HeaderTop = () => {
    return (
        <>
            <Container>
                <Row className="border-bottom border-1">
                    <Col lg={4}>
                        <div className="logo pt-3">
                            <h3><Link to="/"><span className="text-info">Cure</span>Point</Link></h3>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <Col lg={4} className="d-flex lg:justify-content-center">
                                <div className="d-flex top-box align-items-center fs-6">
                                    <span className="me-2 top-box-icon bg-info text-white md:p-1 rounded-circle"><FontAwesomeIcon icon={faClock} /> </span>
                                    <div>
                                        <p className="lh-sm fw-bolder pt-3">Work Time: 09:00-17.00 <br /> <span className="fw-normal">Saturday and Sunday - Closed</span></p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className="d-flex lg:justify-content-center">
                                <div className="d-flex top-box align-items-center fs-6">
                                    <span className="me-2 top-box-icon bg-info text-white md:p-1 rounded-circle"> <FontAwesomeIcon icon={faEnvelope} /> </span>
                                    <div>
                                        <p className="lh-sm fw-bolder pt-3">Mail Us <br /> <span className="fw-normal">mail@curepoint.com</span></p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className="d-flex lg:justify-content-center">
                                <div className="d-flex top-box align-items-center fs-6">
                                    <span className="me-2 top-box-icon bg-info text-white md:p-1 rounded-circle"><FontAwesomeIcon icon={faPhone} /> </span>
                                    <div>
                                        <p className="lh-sm fw-bolder pt-3">Call Us <br /> <span className="fw-normal">(+088) 212 521 211</span></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HeaderTop;