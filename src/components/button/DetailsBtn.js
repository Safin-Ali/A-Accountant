import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitBtn from './SubmitBtn';

const DetailsBtn = ({text,func}) => {
    const navigate = useNavigate();

    function handleSeeMoreBtn () {
        navigate('/services')
    }

    return (
        <div className={`text-center`}>
            <SubmitBtn text={`LOGIN`}></SubmitBtn>
        </div>
    );
};

export default DetailsBtn;