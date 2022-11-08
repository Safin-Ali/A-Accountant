import React, { useContext } from "react";
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {RiUserAddFill, RiUserSharedFill} from 'react-icons/ri'
import { AuthData } from "../../context/AuthContext";

const Navbar = () => {
  const {userData,logOut} = useContext(AuthData);
  const navigate = useNavigate();
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
          {
            userData?.email && <RiUserSharedFill onClick={logOut} className={`text-2xl cursor-pointer`}></RiUserSharedFill>
            || <RiUserAddFill onClick={()=> navigate(`/login`)} className="text-2xl cursor-pointer"></RiUserAddFill>
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
