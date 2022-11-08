import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';


export const AuthData = createContext();

const AuthContext = ({children}) => {

    const auth = getAuth(app);

    const [userData,setUserData] = useState(null);
    const [loaded,setLoaded] = useState(true);

    const googleProv = new GoogleAuthProvider(app);

    const logIn = (email,pass) => {
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const signUp = (email,pass) => {
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const signWithGoogle = () => {
        return signInWithPopup(auth,googleProv);
    }
    const profileUpdate = (name,prflImg) => {
        return updateProfile(auth.currentUser,{
            displayName: `${name}`,
            photoURL: `${prflImg}`
        });
    }

    useEffect(()=>{
        const stopObs = onAuthStateChanged(auth,user=>{
            setUserData(user);
            setLoaded(false);
        })
        return () => stopObs();
    },[])

    console.log(userData)

    const authInfo = {logIn,userData,loaded,signUp,logOut,signWithGoogle,profileUpdate};

    return (
        <AuthData.Provider value={authInfo}>
            {children}
        </AuthData.Provider>
    );
};

export default AuthContext;