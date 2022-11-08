import React from 'react';

const ServiceDetailsCard = ({data}) => {

    const {service_name,service_des,_id,rating,service_thumb} = data;

    return (        
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <img className="rounded-t-lg" src={service_thumb} alt="Service"/>
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{service_name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {service_des}
            </p>
        </div>
    </div>

    );
};

export default ServiceDetailsCard;