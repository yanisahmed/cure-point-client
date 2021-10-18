import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderNav from '../../Shared/HeaderNav/HeaderNav';
import HeaderTop from '../../Shared/HeaderTop/HeaderTop';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <HeaderNav></HeaderNav>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;