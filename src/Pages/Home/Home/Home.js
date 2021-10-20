import React from 'react';
import Services from '../../Services/Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Consultation from '../Consultation/Consultation';

const Home = () => {
    return (
        <>
            <section className="section-banner">
                <Banner></Banner>
            </section>
            <section className="services mt-4">
                <Services></Services>
            </section>

            <section className="services mt-4">
                <Consultation></Consultation>
            </section>
            <section className="services mt-4">
                <About></About>
            </section>
        </>
    );
};

export default Home;