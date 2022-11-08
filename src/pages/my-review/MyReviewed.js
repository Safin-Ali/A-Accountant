import React, { useContext, useEffect, useState } from 'react';
import ReviewedCard from '../../components/review-card/ReviewedCard';
import { AuthData } from '../../context/AuthContext';
import { Helmet } from 'react-helmet';

const MyReviewed = () => {

    const {userData} = useContext(AuthData)

    const [reviwedServices,setReviwedServices] = useState();

    useEffect(()=>{
        fetch(`http://localhost:5000/my-review/?email=${userData?.email}`)
        .then(res => res.json())
        .then(data => setReviwedServices(data))
    },[userData])

    return (
        <>
            <Helmet>
                <title>My Review</title>
            </Helmet>
            <section className={`grid grid-cols-2 gap-x-[7%] gap-[5%] mx-[10%]`}>
                {
                    reviwedServices?.map(elm => <ReviewedCard key={elm._id} data={elm}></ReviewedCard>)
                }
            </section>
        </>
    );
};

export default MyReviewed;