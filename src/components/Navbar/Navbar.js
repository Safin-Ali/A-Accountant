import React, { useContext } from "react";
import {Link, Navigate, NavLink, useNavigate} from "react-router-dom";
import {RiUserAddFill, RiUserSharedFill} from 'react-icons/ri'
import { AuthData } from "../../context/AuthContext";

const Navbar = () => {
  const {userData,logOut} = useContext(AuthData);
  const navigate = useNavigate();

  function handleLogOut () {
    logOut()
    .then(res => localStorage.removeItem('jwt-token'))
    .catch(e => e.message);
  }

  return (
    <header className="mb-10">
      <nav className={`flex justify-between flex-col lg:flex-row px-[3%] items-center p-5 shadow-md`}>
        {/* Brand Logo / Text */}
        <div className={`basis-6/12`}>
           <NavLink to={'/'} className={`text-4xl font-russo text-[#FF4F5A]`}><span className={`text-[#8758FF]`}>A</span> Accountant</NavLink>
        </div>

        {/* User Profile And Route NavLink } */}
        <div className={`flex flex-col lg:flex-row mt-2 lg:my-0 justify-center sm:text-base items-center`}>
          <div className={`md:mr-10`}>
              {userData?.email && <Link to={`/my-review`} className={`inline-block font-medium mx-3`}>My Reviews</Link>}
              {userData?.email && <Link to={`/add-service`} className={`inline-block font-medium mx-3`}>Add Services</Link>}
            <Link to={'/blog'} className={`inline-block font-medium mx-3`}>Blog</Link>
          </div>
          {
            userData?.email && <RiUserSharedFill title={userData.displayName} onClick={handleLogOut} className={`text-xl sm:text-2xl mt-2 cursor-pointer`}></RiUserSharedFill>
            || <RiUserAddFill onClick={()=> navigate(`/login`)} className="text-2xl cursor-pointer"></RiUserAddFill>
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
