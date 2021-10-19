import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    console.log(items);
    const filteredData = items.filter(item => item.id == id);


    return (
        <section>
            <Container>
                <Row>
                    <Col className="text-center"><h3 className="fs-3 text-uppercase">Service Details</h3></Col>

                </Row>
                <Row>
                    <Col>
                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default Details;