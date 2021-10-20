import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    const aboutImage = 'https://i.ibb.co/SvfrZns/female-doctor-hospital-with-stethoscope-2-removebg-preview-1.png';
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6} className="d-flex justify-content-center">
                        <div className="about-image">
                            <img src={aboutImage} alt="standing lady doctor" />
                        </div>
                    </Col>
                    <Col lg={6} className="d-flex align-items-center">
                        <div className="about-details">
                            <h3 className="section-title">About Us</h3>
                            <p>
                                We are Bangladesh based health care service company. We have expert physian alogn with modern meical instrument. We have been providing Online Medical Support since 2012.
                            </p>
                            <p>
                                We hope to experience our service. Have fun, Have safe.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;