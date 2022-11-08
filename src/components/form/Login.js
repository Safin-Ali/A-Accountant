import React, { useState } from 'react';
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa';

const Login = () => {

    const[visibleBool,setVisibleBool] = useState(false);
    const [showPass,setShowPassBoo] = useState(false);

    // Handle Login Button Func
    function handleLogin (e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
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
        <section className={`flex justify-center min-h-screen h-full items-center`}>
            <div className={`border bg-neutral-50 shadow-md px-[4%] py-[5%] rounded-md`}>
            <form onSubmit={handleLogin}>
                <h1 className={`text-center text-3xl font-semibold uppercase`}>Login</h1>
                <div class="relative z-0 my-6 w-full group">
                <input type="email" name="email"
                 className="block py-2.5 px-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required/>
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className={`my-4 relative`}>
                    <div class="relative z-0 my-6 w-full group">
                    <input onKeyUp={handleVisible} type={showPass ? 'text' : 'password'} name="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required/>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <span onClick={handleTogglePass} className={`${visibleBool ? 'inline-block' : 'hidden'} absolute cursor-pointer top-1/2 -translate-y-1/2 right-[5%]`}>
                        {
                            showPass ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                        }
                    </span>
                </div>
                <div className={`my-4 text-center`}>
                <button type="button" className={`text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2`}>LOGIN</button>
                </div>
            </form>
            </div>
        </section>
    );
};

export default Login;