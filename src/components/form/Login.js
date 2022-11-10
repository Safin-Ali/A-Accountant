import React, { useContext, useState } from 'react';
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook,BsGithub} from 'react-icons/bs';
import { AuthData } from '../../context/AuthContext';
import { Helmet } from 'react-helmet';
import LoadingAnim from '../spinner/LoadingAnim';
import { Link, Navigate } from 'react-router-dom';
import loginImage from './login.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const[visibleBool,setVisibleBool] = useState(false);
    const [showPass,setShowPassBoo] = useState(false);
    const {logIn,loaded,userData,signWithGithub,signWithFacebook,signWithGoogle} = useContext(AuthData);

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

    // Handle Login Button Func
    function handleLogin (e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(res => {
            jwtToken(email)
        })
        .catch(e => {
            console.log(e.message)
            if(e.message === 'Firebase: Error (auth/user-not-found).') {
                form.password.value = '';
                return notify('User Not Found Please Create Account')
            }
            if(e.message === 'Firebase: Error (auth/wrong-password).') {
                form.password.value = '';
                return notify('Wrong Password')
            }
        })
    };

    // Handle Visible Icon Toggle
    function handleVisible (e) {
        const feildValue = e.target.value;
        feildValue ? setVisibleBool(true) : setVisibleBool(false);
    };

    // function toggle hide/show password
    function handleTogglePass () {
        setShowPassBoo(!showPass)
    };

    if(loaded) return <div className={`flex h-screen items-center text-center justify-center`}><LoadingAnim></LoadingAnim></div>
    
    if(userData?.email) return <Navigate to={'/'}></Navigate>

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <section className={`flex justify-center min-h-screen h-full items-center`}>
                <div className={`flex justify-center items-center gap-x-10`}>
                    <div className={`hidden md:w-1/2 md:block`}>
                        <img className={`rounded`} src={loginImage} alt="" />
                    </div>
                    <div className={`border bg-neutral-50 shadow-md px-[4%] py-[5%] rounded-md`}>
                    <form onSubmit={handleLogin}>
                        <h1 className={`text-center text-3xl font-semibold uppercase`}>Login</h1>
                        <div className="relative z-0 my-6 w-full group">
                        <input type="email" name="email"
                        className="block py-2.5 px-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required/>
                        <label className="peer-focus:font-medium bg-transparent absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className={`my-4 relative`}>
                            <div className="relative z-0 my-6 w-full group">
                            <input onKeyUp={handleVisible} type={showPass ? 'text' : 'password'} name="password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required/>
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                            <span onClick={handleTogglePass} className={`${visibleBool ? 'inline-block' : 'hidden'} absolute cursor-pointer top-1/2 -translate-y-1/2 right-[5%]`}>
                                {
                                    showPass ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                }
                            </span>
                        </div>
                        <div className={`my-4 text-center`}>
                        <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">LOGIN</button>
                        <p className={`my-1 font-medium`}>No account? <Link className={`text-blue-600 underline`} to={`/signup`}>registration</Link></p>
                        </div>
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

export default Login;