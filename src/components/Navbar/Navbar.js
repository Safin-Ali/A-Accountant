import React, { useContext } from "react";
import {Link, Navigate, NavLink, useNavigate} from "react-router-dom";
import {RiUserAddFill, RiUserSharedFill} from 'react-icons/ri'
import { AuthData } from "../../context/AuthContext";

const Navbar = () => {
  const {userData,logOut} = useContext(AuthData);
  const navigate = useNavigate();
  return (
    <header className="mb-10">
      <nav className={`flex justify-between px-[3%] items-center p-5 shadow-md`}>
        {/* Brand Logo / Text */}
        <div className={`basis-6/12`}>
           <NavLink to={'/'} className={`text-4xl font-russo text-[#FF4F5A]`}><span className={`text-[#8758FF]`}>A</span> Accountant</NavLink>
        </div>

        {/* User Profile And Route NavLink } */}
        <div className={`flex items-center`}>
          <div className={`mr-10`}>
              {userData?.email && <Link to={`/my-review`} className={`inline-block mx-3`}>My Reviews</Link>}
              {userData?.email && <Link to={`/add-service`} className={`inline-block mx-3`}>Add Services</Link>}
            <Link to={'/blog'}>Blog</Link>
          </div>
          {
            userData?.email && <RiUserSharedFill title={userData.displayName} onClick={logOut} className={`text-2xl cursor-pointer`}></RiUserSharedFill>
            || <RiUserAddFill onClick={()=> navigate(`/login`)} className="text-2xl cursor-pointer"></RiUserAddFill>
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
