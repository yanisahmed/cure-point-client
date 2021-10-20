import React from 'react';
import { Button } from 'react-bootstrap';
import './Consultation.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const Consultation = () => {
    return (
        <div className="consultation">
            <div className="not-found-wrapper d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <p className="fs-1 fw-bold text-white">Get Online Consultation</p>
                    <p className="text-white">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                    <Link to="/appointment"><Button variant="info" className="px-4 border-0 my-4">Start Video Chat <FontAwesomeIcon icon={faVideo} className="ms-2 text-white" /></Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Consultation;