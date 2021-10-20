import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
                        {loading ? <div>
                            <img src={filteredData[0].img_url} alt="" />
                            <h4 className="my-2">{filteredData[0].name}</h4>
                            <p>{filteredData[0].desc}</p>
                            <Link to="/services"><button className="bg-info border-0 px-4 py-2 text-white rounded-pill text-uppercase fw-bold">Services</button></Link>
                        </div> : ' '}
                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default Details;