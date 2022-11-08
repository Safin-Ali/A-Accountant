import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReviewCard from '../../components/review-card/ReviewCard';
import ServiceDetailsCard from './ServiceDetailsCard';
import '../../components/review-card/ReviewCard.css';
import ReviewForm from '../../components/form/ReviewForm';

const Service = () => {

    // services data
    const [srvcDT,setSRVCDT] = useState();

    const [reviewDT,setReviewDT] = useState([]);

    const params = useParams();

    // get data
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${params.id}`)
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
            <section className={`grid grid-cols-2 justify-center items-center`}>
                    {
                        srvcDT && <ServiceDetailsCard data={srvcDT} visibleModal={visibleModal}></ServiceDetailsCard>
                    }
                <div className={`max-h-screen overflow-y-scroll hide-scrollbar border-l-2 border-l-purple-600`}>
                    {
                        reviewDT.length === 0 ? <p className={`text-center text-2xl`}>No Review</p> : reviewDT.map(elm => <ReviewCard key={elm._id} data={elm}></ReviewCard>)
                    }
                </div>
                {
                    bool && <ReviewForm data={srvcDT} visibleModal={visibleModal}></ReviewForm>
                }
            </section>
        </>
    );
};

export default Service;