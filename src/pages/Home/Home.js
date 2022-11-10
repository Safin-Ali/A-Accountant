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
        fetch(`https://a-accountant.vercel.app/home`,{
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
            <>
                <CarouselBanner key={1}></CarouselBanner>
            </>
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
            <div className={`w-[80%] border md:border-0 rounded-lg lg:rounded-none p-3 md:px-0 flex-col gap-10 my-10 md:flex-row mx-auto flex justify-center items-center`}>
                <div className={`md:w-1/2`}>
                <h3 className={`text-3xl mb-10 font-semibold`}>What is Accountant <span className={`text-purple-700`}>?</span></h3>
                <p className={`font-medium font-secular md:text-lg`}>"An Accountant helps businesses make critical financial decisions by collecting, tracking, and correcting the company's finances. They are responsible for financial audits, reconciling bank statements, and ensuring financial records are accurate throughout the year"</p>
                </div>
                <div className={`md:w-1/2`}>
                    <img className={`rounded-lg`} src='https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-983321926.jpg?itok=usJ_HhgI' alt="Accountant Thumb" />
                </div>
            </div>        
        </>
    );
};

export default Home;