import React, { useContext } from 'react';
import LoadingAnim from '../../components/spinner/LoadingAnim';
import { AuthData } from '../../context/AuthContext';
import {Navigate} from 'react-router-dom'

const PrivatePage = ({children}) => {
    const {loaded,userData} = useContext(AuthData);

    if(loaded){
        return <div className={`flex h-screen items-center text-center justify-center`}><LoadingAnim></LoadingAnim></div>
    }
    if(!userData) {
        return <Navigate to={`/login`}></Navigate>
    }
    return children
};

export default PrivatePage;