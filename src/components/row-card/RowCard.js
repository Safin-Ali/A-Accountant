import React, { useEffect, useState } from 'react';
import LoadingAnim from '../spinner/LoadingAnim';


function CardDesign({data}){

    const {service_name,service_des,_id,rating,service_thumb} = data;

    return(
        <div className={`flex my-5 rounded-lg items-center border shadow-md w-9/12 mx-auto`}>
    {/* Services Thumb */}
    <div className={`w-2/3 mx-auto`}>
        <img src={service_thumb} className={`w-full rounded-l-lg`} alt={`Banner ${service_name}`} />
    </div>
    {/* Services Content */}
    <div className={`flex items-center flex-col text-center`}>
        <h5 className={`mb-2 text-2xl font-bold tracking-tight capitalize`}>{service_name}</h5>
        <p className={`mb-3 font-normal`}>{service_des.slice(0,100)}</p>
    </div>
        </div>
    )
}

const RowCard = () => {
    
    // get servoces data
    const[srvcData,setSrvcData] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:5000/`)
        .then(res => res.json())
        .then(data => setSrvcData(data))
    },[])

    return (
        <div className={`mt-10 container mx-auto`}>
            {
                
                srvcData?.map(elm => <CardDesign key={elm._id} data={elm}></CardDesign>)
                || <div className={`text-center mb-10`}><LoadingAnim></LoadingAnim></div>
            }
        </div>
    );
};

export default RowCard;