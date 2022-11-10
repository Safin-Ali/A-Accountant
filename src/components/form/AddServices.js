import React, { useContext } from 'react';
import { AuthData } from '../../context/AuthContext';
import SubmitBtn from '../button/SubmitBtn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {

    const {userData} = useContext(AuthData);

    const {displayName,email} = userData;

        // Toast
        const notify = (text) => toast.success(text, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const existEncryptToken = localStorage.getItem('jwt-token');

    function addService (addServiceObj) {
        fetch(`https://a-accountant.vercel.app/services`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            encryptToken: `Bearer ${existEncryptToken}`,
        },
        body: JSON.stringify(addServiceObj),
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.acknowledged) {
                notify('Services Added Successful')
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    function handleAddService (e) {
        e.preventDefault()
        const form = e.target;
        const service_name = form.serviceName.value || null;
        const rating = form.servicerate.value || null;
        const price = form.servicePrice.value || null;
        const service_thumb = form.serviceImg.value || null;
        const service_des = form.serviceDes.value || null;
        const newServiceObj = {service_name,rating,price,service_thumb,service_des,displayName,email};
        addService(newServiceObj);
        form.reset();
    }

    return (
        <section>
            <h1 className={`text-3xl text-center font-semibold`}>Add New Service</h1>
                <form onSubmit={handleAddService}>
                    <div className={`grid grid-cols-1 mx-[5%]`}>
                        <div className={`my-5 text-center`}>
                            <input type="text" className={`border focus:outline-purple-600 p-5 rounded-md w-[90%]`} name={`serviceName`} placeholder={`Service Name`} required/>
                        </div>
                        <div className={`my-5 text-center`}>
                            <input type="number" className={`border focus:outline-purple-600 p-5 rounded-md w-[90%]`} name={`servicePrice`} placeholder={`Service Price`}/>
                        </div>
                        <div className={`my-5 text-center`}>
                            <input type="text" className={`border focus:outline-purple-600 p-5 rounded-md w-[90%]`} name={`serviceImg`} placeholder={`Service Image Link`} required/>
                        </div>
                        <div className={`my-5 text-center`}>
                            <input type="number" className={`border focus:outline-purple-600 p-5 rounded-md w-[90%]`} name={`servicerate`} placeholder={`Service Rating`}/>
                        </div>
                        <div className={`my-5 text-center col-span-2`}>
                            <textarea className={`border focus:outline-purple-600 p-5 rounded-md w-[70%]`} placeholder={`Service Description`} name="serviceDes" rows="10" required={true}></textarea>
                        </div>
                        <div className={`text-center col-span-2`}>
                            <SubmitBtn text={`Add Service`}></SubmitBtn>
                        </div>
                    </div>
                </form>
                <ToastContainer/>
        </section>
    );
};

export default AddServices;