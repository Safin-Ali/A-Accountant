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
            <div className={`border bg-neutral-50 shadow-md px-[3%] py-[5%] rounded-md`}>
            <form onSubmit={handleLogin}>
                <h1 className={`text-center text-3xl font-semibold uppercase`}>Login</h1>
                <div className={`my-4`}>
                    <input className={`px-2 w-full py-1 bg-Default border rounded-sm`} type="email" name={`email`} placeholder={`Your Email`} required/>
                </div>
                <div className={`my-4 relative`}>
                    <div>
                        <input onKeyUp={handleVisible} className={`px-2 w-full py-1 bg-Default border rounded-sm`} type={showPass ? 'text' : 'password'} name={`password`} placeholder={`Your Password`} required/>
                    </div>
                    <span onClick={handleTogglePass} className={`${visibleBool ? 'inline-block' : 'hidden'} absolute cursor-pointer top-1/2 -translate-y-1/2 right-[5%]`}>
                        {
                            showPass ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                        }
                    </span>
                </div>
                <div className={`my-4 text-center`}>
                    <button className={``}>LOGIN</button>
                </div>
            </form>
            </div>
        </section>
    );
};

export default Login;