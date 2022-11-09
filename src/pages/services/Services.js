import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RowCard from '../../components/row-card/RowCard';
import LoadingAnim from '../../components/spinner/LoadingAnim.js';
import { Helmet } from 'react-helmet';
import '../../components/review-card/ReviewCard.css';

const Services = () => {

    const fetchLoaderDT = useLoaderData(null);

    return (
        <>
        <Helmet>
            <title>Services</title>
        </Helmet>
            <section className={`max-h-screen hide-scrollbar overflow-y-scroll`}>
                {
                    Array.isArray(fetchLoaderDT) ? fetchLoaderDT.map(elm => <RowCard boolean={true} key={elm._id} data={elm}></RowCard>)
                    : <div className={`text-center mb-10`}> <LoadingAnim></LoadingAnim></div>
                }
            </section>        
        </>
    );
};

export default Services;