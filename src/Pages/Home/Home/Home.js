import React from 'react';
import Services from '../../Services/Services/Services';
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
            <section>
                <Consultation></Consultation>
            </section>
        </>
    );
};

export default Home;