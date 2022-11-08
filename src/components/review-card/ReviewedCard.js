import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';


function ReviwedcardCompo ({data,reviewData}) {
    const {service_name,service_thumb} = data;
    return(
        <div className={`border rounded-sm shadow-md`}>
            <div>
                <img src={service_thumb} className={`rounded-t-sm`} alt="Service thumb" />
                <h4 className={`font-semibold my-3 text-center text-lg capitalize mb-2 text-purple-600`}>{service_name}</h4>

            </div>
            <ReviewData data={reviewData}></ReviewData>
        </div>
    )
}

function ReviewData ({data}) {
    const {feedbackText,serviceId,userEmail,userImg,userName,_id} = data;
    return (
        <div className={`flex border-t flex-col my-5 items-center bg-zinc-100 gap-10 text-center justify-center p-10`}>
            {/* User Profile Image */}
            <div className={`w-1/5 border border-r rounded-full`}>
                <img src={userImg} className={`rounded-full`} alt="User Avatar" />
            </div>

            {/* User Feedback Content */}
            <div>
                <h5 className={`font-semibold`}>{userEmail}</h5>
                <p className={`mt-3`}>{feedbackText}</p>
            </div>
        </div>
    );
}

const ReviewedCard = ({data}) => {

    const [srvcDet,setSrvcDetails] = useState();

    const {serviceId} = data;

    useEffect(()=>{
        fetch(`http://localhost:5000/service/?serviceId=${serviceId}`)
        .then(res => res.json())
        .then(data => setSrvcDetails(data))
    },[])

    return srvcDet?.map(elm => <ReviwedcardCompo key={elm._id} data={elm} reviewData={data}></ReviwedcardCompo>)
};

export default ReviewedCard;