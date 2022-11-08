import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../../components/review-card/ReviewCard';
import ServiceDetailsCard from './ServiceDetailsCard';
import '../../components/review-card/ReviewCard.css';
import ReviewForm from '../../components/form/ReviewForm';

const Service = () => {
    const fetchSingleServiceDT = useLoaderData();

    // toggle modal
    const [bool,setBool] = useState(false);

    function visibleModal () {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setBool(!bool);
    }

    return (
        <>
            <section className={`grid grid-cols-2 justify-center items-center`}>
                    <ServiceDetailsCard data={fetchSingleServiceDT} visibleModal={visibleModal}></ServiceDetailsCard>
                <div className={`max-h-screen overflow-y-scroll hide-scrollbar border-l-2 border-l-purple-600`}>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                </div>
                {
                    bool && <ReviewForm visibleModal={visibleModal}></ReviewForm>
                }
            </section>
        </>
    );
};

export default Service;