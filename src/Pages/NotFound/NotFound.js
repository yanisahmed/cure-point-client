import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <section className="section-notfound">
            <Container>
                <Row>
                    <Col>Not found</Col>
                </Row>
            </Container>
        </section>
    );
};

export default NotFound;