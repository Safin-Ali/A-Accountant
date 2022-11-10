import React, { useContext } from 'react';
import { AuthData } from '../../context/AuthContext';
import {GrClose} from 'react-icons/gr'
import SubmitBtn from '../button/SubmitBtn';

const UpdateReviewForm = ({toggleModal,handleUpdateData,reviewServiceID}) => {
    const {userData} = useContext(AuthData);
    const {displayName,email} = userData;
    return (
        <div className={`absolute w-[90%] bg-slate-300 transform top-1/2 -translate-y-1/2 p-7 rounded-lg left-1/2 -translate-x-1/2`}>
            <form onSubmit={handleUpdateData}>
                <div className={`grid gap-5 grid-cols-2`}>
                    <div className={`my-5`}>
                    <input type="text" name={`userName`} placeholder={`Your Name`} className={`w-full border px-5 py-2`} defaultValue={displayName}  />
                    </div>
                    <div className={`my-5`}>
                    <input type="email" name={`userEmail`} placeholder={`Your Email`} className={`w-full border px-5 py-2`} defaultValue={email}  />
                    </div>
                    <div className={`my-5 col-span-2`}>
                        <textarea rows={'10'} name={`updateDes`} className={`w-full p-5 rounded-lg`} placeholder={`Review Text`} defaultValue={``}></textarea>
                    </div>
                    <p><GrClose onClick={toggleModal} className={`text-2xl absolute top-[2%] right-[2%] cursor-pointer`}></GrClose></p>
                </div>
                <SubmitBtn text={`UPDATE`}></SubmitBtn>
            </form>
        </div>
    );
};

export default UpdateReviewForm;