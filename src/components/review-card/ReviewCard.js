import React from 'react';

const ReviewCard = ({data}) => {
    const {feedbackText,userEmail,userImg} = data;
    return (
        <div className={`flex flex-col lg:flex-row w-[80%] my-5 justify-center items-center bg-zinc-100 shadow-sm gap-10 lg:w-10/12 mx-auto rounded-xl border p-10`}>
            {/* User Profile Image */}
            <div className={`w-1/5 border border-r rounded-full`}>
                <img src={userImg} className={`rounded-full`} alt="User Avatar" />
            </div>

            {/* User Feedback Content */}
            <div>
                <h5 className={`font-semibold text-purple-600`}>{userEmail}</h5>
                <p className={`mt-3 font-secular`}>"{feedbackText}"</p>
            </div>
        </div>
    );
};

export default ReviewCard;