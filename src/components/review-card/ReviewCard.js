import React from 'react';
import img from './3324677.jpg';

const ReviewCard = ({data}) => {
    const {feedbackText,serviceId,userEmail,userImg,userName,_id} = data;
    return (
        <div className={`flex my-5 items-center bg-zinc-100 shadow-sm gap-10 w-10/12 mx-auto rounded-xl border p-10`}>
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
};

export default ReviewCard;