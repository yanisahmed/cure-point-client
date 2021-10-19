import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    let history = useHistory();

    const path = history.location.pathname;

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <Container>
                <Row>
                    <Col className="text-center"><h3 className="fs-3 text-uppercase">Services</h3></Col>

                </Row>
                <Row className="my-5">
                    {
                        path === '/services' ? services.map(service => <Service key={service.id} service={service} />) : ''
                    }
                    {
                        path === '/home' ? services.map((service, index) => index < 6 && <Service key={service.name} service={service} />) : ''
                    }
                    {
                        path === '/' ? services.map((service, index) => index < 6 && <Service key={service.name} service={service} />) : ''
                    }
                    {/* {services.map(service => <Service key={service.id} service={service} />)} */}

                </Row>
            </Container>
        </section>
    );
};

export default Services;