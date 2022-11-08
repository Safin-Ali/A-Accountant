import React, { useEffect, useState } from 'react';
import SeeMoreBtn from '../../components/button/SeeMoreBtn';
import CarouselBanner from '../../components/carousel/CarouselBanner';
import Navbar from '../../components/Navbar/Navbar';
import RowCard from '../../components/row-card/RowCard';
import LoadingAnim from '../../components/spinner/LoadingAnim';

const Home = () => {

    // get 3 services data
    const[srvcData,setSrvcData] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:5000/`)
        .then(res => res.json())
        .then(data => setSrvcData(data))
    },[])

    return (
        <>
            <CarouselBanner></CarouselBanner>
            <div className={`mt-10 container mx-auto`}>
                {
                    srvcData?.map(elm => <RowCard key={elm._id} data={elm}></RowCard>)
                    || <div className={`text-center mb-10`}> <LoadingAnim></LoadingAnim> </div>
                }
            </div>
            <SeeMoreBtn text={'See More'}></SeeMoreBtn>           
        </>
    );
};

export default Home;