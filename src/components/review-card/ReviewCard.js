import React from 'react';
import img from './3324677.jpg';

const ReviewCard = () => {
    return (
        <div className={`flex my-5 items-center bg-zinc-100 shadow-sm gap-10 w-10/12 mx-auto rounded-xl border p-10`}>
            {/* User Profile Image */}
            <div className={`w-4/5 border border-r rounded-full`}>
                <img src={img} className={`rounded-full`} alt="User Avatar" />
            </div>

            {/* User Feedback Content */}
            <div>
                <h5 className={`font-semibold`}>John.Doe@xyz.com</h5>
                <p className={`mt-3`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi cupiditate dolorem aspernatur dicta, aliquid fugit accusamus incidunt minima? Et cum ratione eaque consequatur aut commodi deserunt sit perspiciatis dicta placeat?</p>
            </div>
        </div>
    );
};

export default ReviewCard;