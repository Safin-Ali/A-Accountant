import React, { useEffect, useState } from 'react';
import DetailsBtn from '../button/DetailsBtn';
import LoadingAnim from '../spinner/LoadingAnim';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


export function ViewImg ({imgLink}) {
    return (
        <PhotoProvider>
        <PhotoView src={imgLink}>
          <img src={imgLink} className={`rounded-t-lg lg:rounded-l-lg`} alt="Service Banner" />
        </PhotoView>
      </PhotoProvider>
    )
}

const RowCard = ({data,boolean}) => {
    const {service_name,service_des,_id,price,rating,service_thumb} = data;
    return(
        <div className={`flex flex-col lg:flex-row sm:w-[70%] my-7 rounded-lg items-center border w-[90%] shadow-md lg:w-9/12 mx-auto`}>
    {/* Services Thumb */}
    <div className={`lg:w-2/3 cursor-pointer`}>
    <ViewImg imgLink={service_thumb}></ViewImg>
    </div>
    {/* Services Content */}
    <div className={`flex px-2 lg:px-0 my-2 lg:my-0 items-center flex-col text-center`}>
        <h5 className={`mb-2 text-base md:text-xl lg:text-2xl font-bold tracking-tight capitalize`}>{service_name}</h5>
        <p className={`my-0.5`}><strong>Price: ${price}</strong></p>
        <p className={`mb-3`}>{service_des.slice(0,100)}</p>
        <div className={boolean ? 'block' : 'hidden'}>
            <DetailsBtn text={`Details`} data={data}></DetailsBtn>
        </div>
    </div>
        </div>
    )
};

export default RowCard;