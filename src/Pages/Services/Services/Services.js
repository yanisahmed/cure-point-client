import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import { Lines } from 'react-preloaders';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const path = history.location.pathname;

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setLoading(true);
                setServices(data);
            })
            .catch(err => {
                setLoading(true);
            });
    }, [])
    return (

        <section>
            <Container>

                <Row>
                    <Col className="text-center"><h3 className="fs-3 text-uppercase">Services</h3></Col>

                </Row>
                {loading ? <Row className="my-5">

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

                </Row> : <Spinner animation="grow" variant="success" />}
            </Container>
        </section>
    );
};

export default Services;