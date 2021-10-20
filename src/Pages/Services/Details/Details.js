import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(true);
            })
    }, [])
    const filteredData = items.filter(item => item.id == id);


    return (
        <section>
            <Container>
                <Row>
                    <Col className="text-center"><h3 className="fs-3 text-uppercase">Service Details</h3></Col>

                </Row>
                <Row>
                    <Col className="my-4">
                        {loading ? <div className="single-details">
                            <img src={filteredData[0].img_url} alt="" />
                            <h4 className="my-2">{filteredData[0].name}</h4>
                            <p>{filteredData[0].desc}</p>
                            <Link to="/services">
                                <Button variant="warning" className="me-2 border-0 px-4 py-2 text-white text-uppercase fw-bold">Services</Button>

                            </Link>

                            <Link to="/appointment">
                                <Button variant="info" type="submit" className="text-white text-uppercase">
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-white me-2" />  Book Appointment
                                </Button>
                            </Link>
                        </div> : <Spinner animation="grow" />}
                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default Details;