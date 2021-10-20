import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, img_url, name, desc } = props.service;
    return (
        <Col lg={4} className="single-service mb-4">
            <img src={img_url} alt="" className="" />
            <h3 className="">{name}</h3>
            <p>{desc.substring(1, 100)}</p>
            <Link to={`/services/${id}`} >
                <Button variant="warning" className="me-2">Details</Button>
            </Link>
            <Link to="/appointment">
                <Button variant="info" type="submit" className="text-white text-uppercase">
                    <FontAwesomeIcon icon={faPaperPlane} className="text-white me-2" />  Book Appointment
                </Button>
            </Link>
        </Col>
    );
};

export default Service;