import React from 'react';
import { ViewImg } from '../../components/row-card/RowCard';

const ServiceDetailsCard = ({data,visibleModal}) => {

    const {service_name,service_des,price,service_thumb} = data;

    return (
        <section className={`w-[95%] lg:w-2/3 mx-auto border-2 shadow-lg rounded-lg`}>
            <div className={`rounded-t-lg cursor-pointer`}>
                <ViewImg imgLink={service_thumb}></ViewImg>
            </div>
            <div className={`p-5`}>
                <h4 className={`font-semibold text-center capitalize mb-2 text-purple-600`}>{service_name}</h4>
                <p className={`mt-2 font-medium text-gray-800`}>{service_des}</p>
                <div className={`mt-2 text-center`}>
                <p className={`my-0.5`}><strong>Price: ${price === null ? 0 : price}</strong></p>
                <button onClick={visibleModal} type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Review</button>
                </div>
            </div>
        </section>

    );
};

export default ServiceDetailsCard;