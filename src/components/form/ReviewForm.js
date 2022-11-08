import React from 'react';
import {MdRateReview} from 'react-icons/md';

const ReviewForm = () => {

    function handleFeedbackSubmit (e) {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const feedbackText = form.feedbackDescription.value;
        console.log(userEmail,userName,feedbackText)
    }

    return (
        <section className={`absolute w-[60%] rounded-lg min-h-[calc(100vh-20vh)] max-h-[calc(100vh-20vh)] top-1/2 left-1/2 bg-slate-200 p-10 -translate-x-1/2 -translate-y-1/2`}>
            <h4 className={`text-3xl`}>Please Give Me Feedback!</h4>
            <form onSubmit={handleFeedbackSubmit}>
            <div className={`grid grid-cols-2 gap-x-[10%]`}>
                    <div className={`my-5`}>
                        <input type="text" name={`userName`} className={`border p-2 rounded-lg w-full focus:outline-purple-600`} value={`Name`} readOnly/>
                    </div>
                    <div className={`my-5`}>
                        <input type="email" name={`userEmail`} className={`border p-2 rounded-lg w-full focus:outline-purple-600`} value={`Email`} readOnly/>
                    </div>
                    <div className={`my-5 col-span-2`}>
                        <textarea name="feedbackDescription" className={`w-full px-5 py-3 font-medium rounded-md focus:outline-purple-600`} cols="30" rows="10"></textarea>
                    </div>
                <div className={`text-center col-span-2`}>
                <button type="submit" className="text-white w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
                </div>
            </div>
            </form>
        </section>
    );
};

export default ReviewForm;