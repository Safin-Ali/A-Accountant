import React, { useContext, useEffect, useState } from 'react';
import ReviewedCard from '../../components/review-card/ReviewedCard';
import { AuthData } from '../../context/AuthContext';
import { Helmet } from 'react-helmet';
import UpdateReviewForm from '../../components/form/UpdateReviewForm';

const MyReviewed = () => {

    const {userData} = useContext(AuthData)

    const [reviwedServices,setReviwedServices] = useState();

    const [reviewServiceID,setReviewServiceID] = useState();

    const existEncryptToken = localStorage.getItem('jwt-token');

    useEffect(()=>{
        fetch(`http://localhost:5000/my-review/?email=${userData?.email}`,{
            headers: {
                encryptToken: existEncryptToken,
            }
        })
        .then(res => res.json())
        .then(data => setReviwedServices(data))
    },[userData,reviwedServices])

    // Toggle Update Form Modal
    const [modal,setModal] = useState(false);

    function toggleModal (id) {
        setModal(!modal)
        !modal ? setReviewServiceID(id) : setReviewServiceID()
    }

    function updateAPIData (updateData) {
        fetch(`http://localhost:5000/review?id=${reviewServiceID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
            })
            .then((response) => response.json())
            .then((data) => {                
                const currentObj = reviwedServices.filter(elm => elm._id === reviewServiceID);
                console.log(currentObj)
                setReviwedServices(currentObj)
                setModal(!modal)
                
                console.log('Success:', data);
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

    return (
        <>
            <Helmet>
                <title>My Review</title>
            </Helmet>
            <section className={`grid grid-cols-2 gap-x-[7%] gap-[5%] mx-[10%]`}>
                {
                    reviwedServices?.map(elm => <ReviewedCard toggleModal={toggleModal} key={elm._id} data={elm}>
                    </ReviewedCard>)
                }
                {
                    modal && <UpdateReviewForm reviewServiceID={reviewServiceID} handleUpdateData={handleUpdateData} toggleModal={toggleModal}></UpdateReviewForm>
                }
            </section>
        </>
    );
};

export default MyReviewed;