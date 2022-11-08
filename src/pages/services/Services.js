import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RowCard from '../../components/row-card/RowCard';
import LoadingAnim from '../../components/spinner/LoadingAnim.js';

const Services = () => {

    const fetchLoaderDT = useLoaderData();

    console.log(fetchLoaderDT)

    return (
        <>
            {
                !fetchLoaderDT?<div className={`text-center mb-10`}> <LoadingAnim></LoadingAnim></div>
                :fetchLoaderDT.map(elm => <RowCard key={elm._id} data={elm}></RowCard>)
            }        
        </>
    );
};

export default Services;