import { faEnvelopeSquare, faMapMarker, faPaperPlane, faPhone, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Appointment = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="page-title">Book Appointment</h1>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col lg={8}>
                        <div className="appointment-form">
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
                                <fieldset>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label as="legend" column sm={2}>
                                            Gender
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Check
                                                type="radio"
                                                label="Male"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Female"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Other"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                            />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                <Form.Select aria-label="Floating label select example" style={{ marginBottom: '10px' }}>
                                    <option>Blood Group</option>
                                    <option value="1">O+</option>
                                    <option value="2">O-</option>
                                    <option value="3">A+</option>
                                </Form.Select>
                                <FloatingLabel controlId="floatingTextarea2" label="Special Message">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px', marginBottom: '10px' }}
                                    />
                                </FloatingLabel>
                                <Button variant="info" type="submit" className="text-white text-uppercase">
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-white me-2" />  Book Appointment
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div>
                            <h3><FontAwesomeIcon icon={faQuestionCircle} /> Need Help</h3>
                            <p>In case of problems in filling out the form, pleease do let us know.</p>
                            <ul className="list-unstyled">
                                <li><FontAwesomeIcon icon={faMapMarker} className="me-4 text-info" /> 25 street avenue, Gulshan</li>
                                <li><FontAwesomeIcon icon={faEnvelopeSquare} className="me-4 text-info" /> mail@curepoint.com</li>
                                <li><FontAwesomeIcon icon={faPhone} className="me-4 text-info" /> (+088) 555 222 111</li>

                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Appointment;