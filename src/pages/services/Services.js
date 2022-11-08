import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RowCard from '../../components/row-card/RowCard';
import LoadingAnim from '../../components/spinner/LoadingAnim.js';

const Services = () => {

    const fetchLoaderDT = useLoaderData(null);

    return (
        <>
            {
                Array.isArray(fetchLoaderDT) ? fetchLoaderDT.map(elm => <RowCard boolean={true} key={elm._id} data={elm}></RowCard>)
                : <div className={`text-center mb-10`}> <LoadingAnim></LoadingAnim></div>
            }        
        </>
    );
};

export default Services;