import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
                            <button type="button" className="btn btn-info text-white">Learn More</button>
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