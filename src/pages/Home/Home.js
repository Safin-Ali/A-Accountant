import React, { useContext, useEffect, useState } from 'react';
import SeeMoreBtn from '../../components/button/SeeMoreBtn';
import CarouselBanner from '../../components/carousel/CarouselBanner';
import RowCard from '../../components/row-card/RowCard';
import LoadingAnim from '../../components/spinner/LoadingAnim';
import { Helmet } from 'react-helmet';
import { AuthData } from '../../context/AuthContext';

const Home = () => {

    const {userData} = useContext(AuthData);

    // get 3 services data
    const[srvcData,setSrvcData] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:5000/`,{
            headers: {
                'Content-Type': 'application/json',
                email: userData?.email,                
            },
        })
        .then(res => res.json())
        .then(data => setSrvcData(data))
    },[userData])

    // Get User Added Services

    function userAddedService () {
        return srvcData?.userAddedDT.map(elm => <RowCard key={elm._id} data={elm} boolean={true}></RowCard>)
        || <div className={`text-center mb-10`}> <LoadingAnim></LoadingAnim> </div>
    }

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <CarouselBanner></CarouselBanner>
            <div className={`mt-10 container mx-auto`}>
                {
                    srvcData?.data.map(elm => <RowCard key={elm._id} data={elm} boolean={true}></RowCard>)
                    || (<div className={`text-center mb-10`}> <LoadingAnim></LoadingAnim> </div>)
                }
                {/* Get Services That the User Has Added  */}
                {
                    srvcData?.userAddedDT && userAddedService()
                }
            </div>
            <SeeMoreBtn text={'See More'}></SeeMoreBtn>           
        </>
    );
};

export default Home;