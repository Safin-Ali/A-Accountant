import React, { useContext, useEffect, useState, } from 'react';
import ReviewedCard from '../../components/review-card/ReviewedCard';
import { AuthData } from '../../context/AuthContext';
import { Helmet } from 'react-helmet';
import UpdateReviewForm from '../../components/form/UpdateReviewForm';
import '../../components/review-card/ReviewCard.css';
import LoadingAnim from '../../components/spinner/LoadingAnim';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviewed = () => {

    const {userData} = useContext(AuthData)

    const [reviwedServices,setReviwedServices] = useState();

    const [reviewServiceID,setReviewServiceID] = useState();

    const existEncryptToken = localStorage.getItem('jwt-token');

    const [callBack,setCall] =  useState(false)

    useEffect(()=>{
        fetch(`https://a-accountant.vercel.app/my-review/?email=${userData?.email}`,{
            headers: {
                encryptToken: `Bearer ${existEncryptToken}`,
            }
        })
        .then(res => res.json())
        .then(data => setReviwedServices(data))
    },[userData,callBack])

    // Toggle Update Form Modal
    const [modal,setModal] = useState(false);
    function toggleModal (id) {
        setModal(!modal)
        !modal ? setReviewServiceID(id) : setReviewServiceID()
    }

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

    function updateAPIData (updateData) {
        fetch(`https://a-accountant.vercel.app/review?id=${reviewServiceID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
            })
            .then((response) => response.json())
            .then((data) => {  
                if(data.acknowledged) {
                    notify('Update Successful')
                    const currentObj = reviwedServices.filter(elm => elm._id === reviewServiceID);
                    console.log(currentObj)
                    setReviwedServices(currentObj)
                    setCall(!callBack)
                    setModal(!modal)
                    setModal(!modal)                
                    setModal(!modal)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function handleUpdateData (e) {
        e.preventDefault();
        const form = e.target;
        const feedbackText = form.updateDes.value;
        updateAPIData({feedbackText});
        form.reset()
    }

    // Delete Reviews
    function deleteReview (data) {
        const {userEmail,serviceId} = data;
        fetch(`https://a-accountant.vercel.app/review?userEmail=${userEmail}&serviceId=${serviceId}`,{
             method: 'DELETE' 
            })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged) {
                const remaining = reviwedServices.filter( elm => elm.serviceId !== serviceId);
                setReviwedServices(remaining)
                notify('Review Delete Successful')
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>My Review</title>
            </Helmet>
            <section className={`grid grid-cols-1 md:grid-cols-2 hide-scrollbar max-h-screen overflow-y-scroll gap-x-[7%] gap-[5%] lg:mx-[10%]`}>
                {
                    reviwedServices?.length === 0 ? 
                    <h5 className={`text-4xl flex justify-center col-span-2 min-h-[calc(100vh-20vh)] items-center`}>No Reviews</h5>                    
                    :
                    reviwedServices?.map(elm => <ReviewedCard deleteReview={deleteReview} setReviwedServices={setReviwedServices} toggleModal={toggleModal} key={elm._id} data={elm}>
                    </ReviewedCard>)
                    || (<div className={`mb-10 col-span-2 mx-auto`}> <LoadingAnim></LoadingAnim> </div>)
                }
                {
                    modal && <UpdateReviewForm handleUpdateData={handleUpdateData} toggleModal={toggleModal}></UpdateReviewForm>
                }
                <ToastContainer/>
            </section>
        </>
    );
};

export default MyReviewed;