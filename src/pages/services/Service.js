import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../../components/review-card/ReviewCard';
import ServiceDetailsCard from './ServiceDetailsCard';
import '../../components/review-card/ReviewCard.css';
import ReviewForm from '../../components/form/ReviewForm';
import { Helmet } from 'react-helmet';

const Service = () => {

    // services data
    const [srvcDT,setSRVCDT] = useState();

    const [reviewDT,setReviewDT] = useState([]);

    const params = useParams();

    // Get Specific Service Data With Review Data
    useEffect(()=>{
        fetch(`https://a-accountant.vercel.app/services/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setSRVCDT(data.result);
            setReviewDT(data.reviewDT)
        })
    },[])

    // toggle modal
    const [bool,setBool] = useState(false);

    function visibleModal () {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setBool(!bool);
    }

    return (
        <>
        <Helmet>
            <title>Service</title>
        </Helmet>
            <section className={`grid grid-cols-1 md:grid-cols-2 justify-center items-center`}>
                    {
                        srvcDT && <ServiceDetailsCard data={srvcDT} visibleModal={visibleModal}></ServiceDetailsCard>
                    }
                <div className={`max-h-screen md:overflow-y-scroll hide-scrollbar lg:border-l-2 lg:border-l-purple-600`}>
                    {
                        reviewDT.length === 0 ? <p className={`text-center text-2xl`}>No Review</p> : reviewDT.map((elm,idx) => <ReviewCard key={idx} data={elm}></ReviewCard>)
                    }
                </div>
                {
                    bool && <ReviewForm data={srvcDT} visibleModal={visibleModal} setReviewDT={setReviewDT}></ReviewForm>
                }
            </section>
        </>
    );
};

export default Service;