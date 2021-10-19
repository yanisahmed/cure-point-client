import React from 'react';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <section className="section-banner">
                <Banner></Banner>
            </section>
            <section className="services mt-4">
                <Services></Services>
            </section>
        </>
    );
};

export default Home;