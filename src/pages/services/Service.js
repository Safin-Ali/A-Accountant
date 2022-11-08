import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewForm from '../../components/form/ReviewForm';
import ServiceDetailsCard from './ServiceDetailsCard';

const Service = () => {
    const fetchSingleServiceDT = useLoaderData();

    return (
        <section className={`grid grid-cols-2 justify-center`}>
            <ServiceDetailsCard data={fetchSingleServiceDT}></ServiceDetailsCard>
        </section>
    );
};

export default Service;