import React, { useContext, useState } from 'react';
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa';
import { AuthData } from '../../context/AuthContext';
import SubmitBtn from '../button/SubmitBtn';
import { Helmet } from 'react-helmet';
import LoadingAnim from '../spinner/LoadingAnim';
import { Link, Navigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook,BsGithub} from 'react-icons/bs';
import signUpImg from './login.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const[visibleBool,setVisibleBool] = useState(false);
    const [showPass,setShowPassBoo] = useState(false);
    const {signUp,profileUpdate,loaded,userData,signWithGithub,signWithFacebook,signWithGoogle} = useContext(AuthData);
    

    // Toast
    const notify = (text) => toast.error(text, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // Handle Visible Icon Toggle
    function handleVisible (e) {
        const feildValue = e.target.value;
        feildValue ? setVisibleBool(true) : setVisibleBool(false);
    };

        // Send Email And Get JWT Encrypt Token
    function jwtToken (email) {
            fetch(`https://a-accountant.vercel.app/jwt`,{
                method: 'POST',
                headers: {
                    email : email,
                }
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('jwt-token',data.encryptToken)
            })
    }

    function handleLoginWithGoogle () {
        signWithGoogle()
        .then(res => {
            return jwtToken(res?.user.email)
        })
        .catch(err => console.log(err))
    }
    function handleLoginWithGithub () {
        signWithGithub()
        .then(res => {
            return jwtToken(res?.user.email)
        })
        .catch(err => console.log(err))
    }
    function handleLoginWithFacebook () {
        signWithFacebook()
        .then(res => {
            return jwtToken(res?.user.email)
        })
        .catch(err => console.log(err))
    }
    
    // function toggle hide/show password
    function handleTogglePass () {
        setShowPassBoo(!showPass)
    };

    // Handle Signup Button Func
    function handlSignup (e) {
        e.preventDefault();
        const form = e.target;
        const name = form.userName.value || null;
        const userImageUrl = form.userImgUrl.value || null;
        const email = form.email.value;
        const firstPassword = form.firstPassword.value;
        const confirmPassword = form.confPassword.value;
        if(firstPassword !== confirmPassword){
            form.confPassword.value =''
            return notify('Ufff! Not Matches Password')
        }
        signUp(email,confirmPassword)
        .then(res => {
            profileUpdate(name,userImageUrl);
            form.reset();
        })
        .catch(e => {
            console.log(e.message)
            if(e.message === 'Firebase: Error (auth/email-already-in-use).') {
                form.email.value ='';
                return notify('This Email Already Used')
            };
            if(e.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') return notify('Please Type Six Charecters');
        })
    };

    if(loaded) return <div className={`flex h-screen items-center text-center justify-center`}><LoadingAnim></LoadingAnim></div>

    if(userData?.email) return <Navigate to={`/`}></Navigate>

    return (
        <>
            <Helmet><title>Signup</title></Helmet>
            <section className={`flex justify-center min-h-screen h-full items-center`}>
                <div className={`flex mx-4 sm:mx-0 justify-center items-center gap-x-10`}>
                    <div className={`hidden md:w-1/2 md:block`}>
                        <img className={`rounded-lg`} src={signUpImg} alt="Signup Banner" />
                    </div>
                    <div className={`border px-10 md:px-[4.2%] bg-neutral-50 shadow-md py-[5%] rounded-md`}>
                    <form onSubmit={handlSignup}>
                        <h1 className={`text-center text-2xl font-semibold`}>Registration</h1>
                        <div className={`my-4`}>
                            <input className={`px-2 w-full font-medium py-1 bg-Default border rounded-sm`} type="text" name={`userName`} placeholder={`Your Name`} required/>
                        </div>
                        <div className={`my-4`}>
                            <input className={`px-2 w-full font-medium py-1 bg-Default border rounded-sm`} type="text" name={`userImgUrl`} placeholder={`Image Url`} required/>
                        </div>
                        <div className={`my-4`}>
                            <input className={`px-2 w-full font-medium py-1 bg-Default border rounded-sm`} type="email" name={`email`} placeholder={`Your Email`} required/>
                        </div>
                        <div className={`my-4 relative`}>
                            <div>
                                <input onKeyUp={handleVisible} className={`px-2 w-full py-1 bg-Default border rounded-sm`} type={showPass ? 'text' : 'password'} name={`firstPassword`} placeholder={`Your Password`} required/>
                            </div>
                            <span onClick={handleTogglePass} className={`${visibleBool ? 'inline-block' : 'hidden'} absolute cursor-pointer top-1/2 -translate-y-1/2 right-[5%]`}>
                                {
                                    showPass ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                }
                            </span>
                        </div>
                        <div className={`my-4`}>
                            <input className={`px-2 w-full font-medium py-1 bg-Default border rounded-sm`} type={showPass ? 'text' : 'password'} name={`confPassword`} placeholder={`Confirm Password`} required/>
                        </div>
                        <div className={`my-4 text-center`}>
                            <SubmitBtn text={`SIGNUP`}></SubmitBtn>
                        </div>
                        <p className={`my-1 font-medium`}>Already have account? <Link className={`text-blue-600 underline`} to={`/login`}>Login</Link></p>
                    </form>
                    <div className='flex justify-center my-0.5 items-center'>
                            <span className={`inline-block h-[1px] bg-slate-800 w-full`}></span>
                            <span className={`mx-2 text-sm font-medium`}>Or</span>
                            <span className={`inline-block h-[1px] bg-slate-800 w-full`}></span>
                    </div>
                    <div className={`flex justify-center`}>
                        <FcGoogle onClick={handleLoginWithGoogle} className={`mx-3 text-3xl cursor-pointer`}></FcGoogle>
                        <BsFacebook onClick={handleLoginWithFacebook} className={`text-blue-700 mx-3 text-3xl cursor-pointer`}></BsFacebook>
                        <BsGithub onClick={handleLoginWithGithub} className={`mx-3 text-3xl cursor-pointer`}></BsGithub>
                    </div>  
                    </div>   
                </div>
            </section>
            <ToastContainer/>
        </>
    );
};

export default Signup;