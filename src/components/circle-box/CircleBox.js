import React from 'react';

const CircleBox = ({count,text}) => {
    return (
        <div className={`text-center mx-[5%] my-[5%] bg-transparent shadow-md md:my-0 border inline-block rounded-[100%] p-0.5 w-[90px]`}>
            <div className={`p-3`}>
                <h2 className={`font-bold text-sm`}>{count}</h2>
                <h6 className={`font-medium text-sm`}>Total <br /> {text}</h6>
            </div>
        </div>
    );
};

export default CircleBox;