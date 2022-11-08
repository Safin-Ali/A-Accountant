import React from 'react';
import img from './3324677.jpg'

const ReviewCard = () => {
    return (
        <section className={`flex min-h-screen h-full items-center justify-center`}>
        <div className={`flex items-center bg-zinc-100 shadow-sm gap-10 w-3/5 mx-auto rounded-xl border p-10`}>
            {/* User Profile Image */}
            <div className={`w-2/5 border border-r rounded-full`}>
                <img src={img} className={`rounded-full`} alt="User Avatar" />
            </div>

            {/* User Feedback Content */}
            <div>
                <h5 className={`font-semibold`}>John.Doe@xyz.com</h5>
                <p className={`mt-3`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi cupiditate dolorem aspernatur dicta, aliquid fugit accusamus incidunt minima? Et cum ratione eaque consequatur aut commodi deserunt sit perspiciatis dicta placeat?</p>
            </div>
        </div>
        </section>
    );
};

export default ReviewCard;