import React from 'react';
import {MdRateReview} from 'react-icons/md'

const ReviewForm = () => {
    return (
        <section className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
            <div className={`bg-zinc-100 border rounded-xl p-10px`}>
                <h4 className={`text-center`}><MdRateReview className={`text-3xl`}></MdRateReview></h4>
                <div className={`grid grid-cols-2 gap-[5%]`}>
                    <div className={`text-center`}>
                        <input type="text" className={`rounded-sm px-2 py-1`} value={`John Doe`} readOnly/>
                    </div>
                    <div className={`text-center`}>
                        <input type="email" className={`rounded-sm px-2 py-1`} value={`John.Doe@xyz.com`} readOnly/>
                    </div>
                    <div className={`text-center col-span-2`}>
                        <textarea className={`rounded-sm w-[95%] px-2 py-1`} name="feedbackDescriptopn" rows="10" placeholder={`give me feedback`}>

                        </textarea>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewForm;