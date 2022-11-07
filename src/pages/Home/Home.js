import React from 'react';
import SimpleBtn from '../../components/button/SimpleBtn';
import CarouselBanner from '../../components/carousel/CarouselBanner';
import Navbar from '../../components/Navbar/Navbar';
import RowCard from '../../components/row-card/RowCard';

const Home = () => {

    return (
        <>
            <Navbar></Navbar>
            <CarouselBanner></CarouselBanner>
            <RowCard></RowCard>
            <SimpleBtn text={'See More'}></SimpleBtn>           
        </>
    );
};

export default Home;