import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../Assest/logo/customLogo.png';

import { MdFormatAlignLeft as RiBarChartHorizontalLine } from 'react-icons/md';
import './Header.css';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const { user, LogOut } = useContext(AuthContext);

  const LogOUT = () => {
    LogOut()
      .then(() => {})
      .catch(error => console.error(error));
  };

  const menuItem = (
    <React.Fragment>
      <li onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-xl" to="/Home">
          Home
        </Link>
      </li>
      <li onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-xl" to="/Appointment">
          Appointment
        </Link>
      </li>
      <li onClick={() => setOpenMenu(!openMenu)}>
        <Link to="/About" className=" text-xl">
          About
        </Link>
      </li>
      <li onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-xl" to="/Reviews">
          Reviews
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li className="flex items-center " onClick={LogOUT}>
            <Link className=" text-xl bg-black text-white py-2 px-3 rounded mx-auto">
              Logout
            </Link>
          </li>
          <li className="flex items-center ">
            <Link
              to="/DashBoard"
              className="flex bg-sky-400 text-white py-2 px-3 rounded text-xl items-center mx-auto"
            >
              Dashboard
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="flex items-center  text-white ">
            <Link
              to="/Login"
              onClick={() => setOpenMenu(!openMenu)}
              className=" text-xl mx-auto bg-sky-400 py-2 px-3 rounded"
            >
              Login
            </Link>
          </li>
          <li
            className="flex items-center "
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Link
              className=" text-xl bg-black text-white mx-auto py-2 px-3 rounded"
              to="/Register"
            >
              Register
            </Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className="navBar nabBg z-[999]">
      <nav className="  container mx-auto flex justify-between py-6 px-8 items-center">
        <div className="">
          {user?.displayName ? (
            <Link to="/dashboard">
              <RiBarChartHorizontalLine className=" w-10 h-10" />
            </Link>
          ) : (
            <Link to="/home">
              <img src={logo1} alt="" className=" w-20 h-20" />
            </Link>
          )}
        </div>
        {openMenu ? (
          <ul className="menuItem items-center">{menuItem}</ul>
        ) : (
          <ul className="menuItems items-center">{menuItem}</ul>
        )}
        <div
          className="relative BarsBar"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <button className="bars ">
              <FaBars />
            </button>
          ) : (
            <button className="closeBar">
              <FaWindowClose />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
