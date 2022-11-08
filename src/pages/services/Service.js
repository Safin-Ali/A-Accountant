import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../../components/review-card/ReviewCard';
import ServiceDetailsCard from './ServiceDetailsCard';
import '../../components/review-card/ReviewCard.css';
import ReviewForm from '../../components/form/ReviewForm';

const Service = () => {
    const fetchSingleServiceDT = useLoaderData();

    return (
        <>
            <section className={`grid grid-cols-2 justify-center items-center`}>
                    <ServiceDetailsCard data={fetchSingleServiceDT}></ServiceDetailsCard>
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
            </section>
            <ReviewForm></ReviewForm>
        </>
    );
};

export default Service;