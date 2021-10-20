import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const bannerImg = 'https://i.ibb.co/SvfrZns/female-doctor-hospital-with-stethoscope-2-removebg-preview-1.png';
    return (

        <section className="section-banner d-flex align-items-end">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="mt-4">
                            <h1 className="fs-1 fw-bold">We have best Medicare plan option for you</h1>
                            <p>We have bunch of medicare plan and experts to support you in your difficult times and help you to recover quickly.</p>
                            <Link to="/appointment">
                                <Button variant="info" type="submit" className="text-white text-uppercase">
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-white me-2" />  Book Appointment
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="d-flex justify-content-center">
                            <img src={bannerImg} alt="female-doctor-hospital-with-stethoscope-2-removebg-preview-1" border="0" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;