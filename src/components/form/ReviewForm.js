import React, { useContext } from 'react';
import {MdRateReview} from 'react-icons/md';
import {GrClose} from 'react-icons/gr';
import { AuthData } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const ReviewForm = ({data,visibleModal,setReviewDT}) => {

    const {userData} = useContext(AuthData);

    const service_id = data._id;
    
    // submit feedback
    function postData (reviewData) {
        fetch(`https://a-accountant.vercel.app/review`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
        })
        .then((response) => response.json())
        .then((data) => {
            visibleModal()
            setReviewDT(elm => [reviewData,...elm]);
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    // get form value
    function handleFeedbackSubmit (e) {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const userImg = form.userImg.src;
        const feedbackText = form.feedbackDescription.value;  
        const serviceId = service_id;
        const postedTime = new Date().getTime();
        const data = {userName,userEmail,feedbackText,userImg,serviceId,postedTime};
        postData(data)
        form.reset()
    }
    if(userData?.email){
        return(
            <section className={`absolute w-[90%] lg:w-[60%] rounded-lg top-1/2 left-1/2 p-5 bg-slate-200 lg:p-10 -translate-x-1/2 -translate-y-1/2 transform`}>
            <div className={`flex justify-between items-center`}>
            <h4 className={`text-3xl`}>Please Give Me Feedback!</h4>
            <GrClose onClick={visibleModal} className={`text-2xl cursor-pointer`}></GrClose>
            </div>
            <form onSubmit={handleFeedbackSubmit}>
                <div className={`w-2/12 mx-auto my-5 border shadow-md rounded-full`}>
                    <img src={userData?.photoURL} name={`userImg`} className={`rounded-full`} alt="User Avatar" />
                </div>
            <div className={`grid grid-cols-2 gap-x-[10%]`}>
                    <div className={`my-5`}>
                        <input type="text" name={`userName`} className={`border p-2 rounded-lg w-full focus:outline-purple-600`} placeholder={`Your Name`} defaultValue={userData?.displayName} required={true}/>
                    </div>
                    <div className={`my-5`}>
                        <input type="email" name={`userEmail`} className={`border p-2 rounded-lg w-full focus:outline-purple-600`} placeholder={`Your Email`} defaultValue={userData?.email} required={true}/>
                    </div>
                    <div className={`my-5 col-span-2`}>
                        <textarea name="feedbackDescription" className={`w-full px-5 py-3 font-medium rounded-md focus:outline-purple-600`} placeholder={`write your feedback`} cols="30" rows="10" required={true}></textarea>
                    </div>
                <div className={`text-center col-span-2`}>
                <button type="submit" className="text-white w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
                </div>
            </div>
            </form>
        </section>
        )
    }
    return(
        <section className={`absolute w-[60%] rounded-lg min-h-[calc(100vh-20vh)] max-h-[calc(100vh-20vh)] top-1/2 left-1/2 bg-slate-200 p-10 -translate-x-1/2 -translate-y-1/2`}>
            <div className={`flex justify-between items-center`}>
            <h1 className={`text-3xl capitalize font-medium`}>Please Login First! Then try Agin</h1>
            <GrClose onClick={visibleModal} className={`text-2xl cursor-pointer`}></GrClose>
            </div>
            <Link className={`flex mb-10 text-3xl text-purple-600 underline justify-center min-h-screen items-center`} to={`/login`}>Login</Link>
        </section>
    )
};

export default ReviewForm;