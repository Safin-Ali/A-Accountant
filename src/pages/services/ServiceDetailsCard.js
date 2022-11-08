import React from 'react';

const ServiceDetailsCard = ({data}) => {

    const {service_name,service_des,_id,rating,service_thumb} = data;

    return (
        <section className={`w-2/3 mx-auto border-2 shadow-lg rounded-lg`}>
            <div>
                <img src={service_thumb} className={`rounded-t-lg`} alt="Service" />
            </div>
            <div className={`p-5`}>
                <h4 className={`font-semibold capitalize mb-2 text-purple-600`}>{service_name}</h4>
                <p className={`mt-2 font-medium text-gray-800`}>{service_des}</p>
            </div>
        </section>

    );
};

export default ServiceDetailsCard;