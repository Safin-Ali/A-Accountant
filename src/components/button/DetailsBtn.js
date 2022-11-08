import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitBtn from './SubmitBtn';

const DetailsBtn = ({text,data}) => {
    const navigate = useNavigate();

    function handleDetailsBtn () {
        navigate(`/services/${data._id}`)
    }

    return (
        <div className={`text-center`}>
            <button onClick={handleDetailsBtn} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{text}</button>
        </div>
    );
};

export default DetailsBtn;