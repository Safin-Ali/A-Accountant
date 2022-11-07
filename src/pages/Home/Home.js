import React from 'react';
import CarouselBanner from '../../components/carousel/CarouselBanner';
import Navbar from '../../components/Navbar/Navbar';
import RowCard from '../../components/row-card/RowCard';

const Home = () => {

    return (
        <>
            <Navbar></Navbar>
            <CarouselBanner></CarouselBanner>
            <RowCard></RowCard>            
        </>
    );
};

export default Home;