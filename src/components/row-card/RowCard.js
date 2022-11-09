import React, { useEffect, useState } from 'react';
import DetailsBtn from '../button/DetailsBtn';
import LoadingAnim from '../spinner/LoadingAnim';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


export function ViewImg ({imgLink}) {
    return (
        <PhotoProvider>
        <PhotoView src={imgLink}>
          <img src={imgLink} alt="Service Banner" />
        </PhotoView>
      </PhotoProvider>
    )
}

const RowCard = ({data,boolean}) => {
    const {service_name,service_des,_id,rating,service_thumb} = data;
    return(
        <div className={`flex my-7 rounded-lg items-center border shadow-md w-9/12 mx-auto`}>
    {/* Services Thumb */}
    <div className={`w-2/3 cursor-pointer`}>
    <ViewImg imgLink={service_thumb}></ViewImg>
    </div>
    {/* Services Content */}
    <div className={`flex items-center flex-col text-center`}>
        <h5 className={`mb-2 text-2xl font-bold tracking-tight capitalize`}>{service_name}</h5>
        <p className={`mb-3 font-normal`}>{service_des.slice(0,100)}</p>
        <div className={boolean ? 'block' : 'hidden'}>
            <DetailsBtn text={`Details`} data={data}></DetailsBtn>
        </div>
    </div>
        </div>
    )
};

export default RowCard;