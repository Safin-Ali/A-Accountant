import React, { useContext, useState } from 'react';
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa';
import { AuthData } from '../../context/AuthContext';
import { Helmet } from 'react-helmet';

const Login = () => {

    const[visibleBool,setVisibleBool] = useState(false);
    const [showPass,setShowPassBoo] = useState(false);
    const {logIn} = useContext(AuthData);

    // Handle Login Button Func
    function handleLogin (e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(res => {
        })
        .catch(e => console.log(e.message))
    }

    // Handle Visible Icon Toggle
    function handleVisible (e) {
        const feildValue = e.target.value;
        feildValue ? setVisibleBool(true) : setVisibleBool(false);
    }

    // function toggle hide/show password
    function handleTogglePass () {
        setShowPassBoo(!showPass)
    }

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <section className={`flex justify-center min-h-screen h-full items-center`}>
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
                    </div>
                </form>
                </div>
            </section>
        </>
    );
};

export default Login;