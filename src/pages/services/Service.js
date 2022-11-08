import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../../components/review-card/ReviewCard';
import ServiceDetailsCard from './ServiceDetailsCard';
import '../../components/review-card/ReviewCard.css';

const Service = () => {
    const fetchSingleServiceDT = useLoaderData();

    return (
        <section className={`grid grid-cols-2 justify-center items-center`}>
                <ServiceDetailsCard data={fetchSingleServiceDT}></ServiceDetailsCard>
            <div className={`max-h-screen overflow-y-auto hide-scrollbar`}>
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
    );
};

export default Service;