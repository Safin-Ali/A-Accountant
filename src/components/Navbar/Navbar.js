import React from "react";
import {NavLink} from "react-router-dom";
import {RiUserAddFill} from 'react-icons/ri'

const Navbar = () => {
  return (
    <header className="mb-10">
      <nav className={`flex justify-between px-[3%] items-center p-5 shadow-md`}>
        {/* Brand Logo / Text */}
        <div>
           <NavLink to={'/'} className={`text-4xl font-russo text-[#FF4F5A]`}><span className={`text-[#8758FF]`}>A</span> Accountant</NavLink>
        </div>

        {/* Route NavLink */}
        <div>
        </div>

        {/* User Profile */}
        <div>
          <RiUserAddFill className="text-2xl cursor-pointer"></RiUserAddFill>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
