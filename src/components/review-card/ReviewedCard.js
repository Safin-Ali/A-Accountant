import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import {FaTrash} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'

function ReviwedcardCompo ({data,reviewData,toggleModal,deleteReview}) {
    const {service_name,service_thumb} = data;
    return(
        <div className={`border rounded-xl bg-zinc-200 w-[85%] 2xl:w-2/3 mx-auto relative shadow-md`}>
            <div>
                <img src={service_thumb} className={`rounded-t-xl`} alt="Service thumb" />
            </div>
            <ReviewData data={reviewData}></ReviewData>
                <FiEdit onClick={()=>toggleModal(reviewData._id)} className={`absolute bottom-[2%] text-xl cursor-pointer left-[5%]`}>

                </FiEdit>
                <FaTrash onClick={()=>{
                    deleteReview(reviewData)
                }} className={`absolute bottom-[2%] text-xl cursor-pointer right-[5%]`}>

                </FaTrash>
        </div>
    )
}

function ReviewData ({data}) {
    const {feedbackText,serviceId,userEmail,userImg,userName,_id} = data;
    return (
        <div className={`px-5`}>
            {/* User Profile Image */}
            <div className={`w-1/5 border border-r rounded-full`}>
                <div className={`flex items-center my-3`}>
                    <img src={userImg} className={`rounded-full block`} alt="User Avatar" />
                    <h5 className={`font-semibold mx-2`}>{userEmail}</h5>
                </div>
            </div>

            {/* User Feedback Content */}
            <div>
                <p className={`mt-3 pb-[15%] text-center`}>{feedbackText}</p>
            </div>
        </div>
    );
}

const ReviewedCard = ({data,toggleModal,deleteReview}) => {
    

    const [srvcDet,setSrvcDetails] = useState();

    const {serviceId} = data;

    const existEncryptToken = localStorage.getItem('jwt-token');

    useEffect(()=>{
        fetch(`https://a-accountant.vercel.app/service/?serviceId=${serviceId}`,{
            headers: {
                encryptToken: `Bearer ${existEncryptToken}`,
            }
        })
        .then(res => res.json())
        .then(data => setSrvcDetails(data))
    },[])

    return srvcDet?.map(elm => <ReviwedcardCompo deleteReview={deleteReview} setSrvcDetails={setSrvcDetails} srvcDet={srvcDet} toggleModal={toggleModal} key={elm._id} data={elm} reviewData={data}></ReviwedcardCompo>)
};

export default ReviewedCard;