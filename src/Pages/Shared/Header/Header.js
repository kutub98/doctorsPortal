import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../../Assest/logo/portal.svg";
import logo2 from "../../../Assest/logo/portal.svg";
import { MdFormatAlignLeft as RiBarChartHorizontalLine } from "react-icons/md";
import "./Header.css";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const { user, LogOut } = useContext(AuthContext);
  console.log(user)
  // console.log(user);

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const LogOUT = () => {
    LogOut()
      .then(() => {})
      .catch((error) => console.error(error));
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
        <li className="flex items-center bg-black text-white py-2 px-3 rounded" onClick={LogOUT}>
            <Link className=" text-xl">Logout</Link>
          </li>
          <li className="flex items-center bg-sky-400 text-white py-2 px-3 rounded">
        <Link to="/DashBoard" className="flex text-xl items-center">
        
          Dashboard
        </Link>
      </li>
      
        </>
      ) : (
        <>
          <li className="flex items-center bg-sky-400 text-white py-2 px-3 rounded">
            <Link to="/Login" onClick={() => setOpenMenu(!openMenu)} className=" text-xl">
              Login
            </Link>
          </li>
          <li className="flex items-center bg-black text-white py-2 px-3 rounded"  onClick={() => setOpenMenu(!openMenu)}>
            <Link className=" text-xl" to="/Register">
              Register
            </Link>
          </li>
        </>
      )}
      
    </React.Fragment>
  );
  return (
    <div className="navBar nabBg">
      <nav className="  container mx-auto flex justify-between py-6 px-8 items-center">
        <div className="">
          
          {
            user?.displayName ? <Link to="/dashboard">
               
              <RiBarChartHorizontalLine className=" w-10 h-10"></RiBarChartHorizontalLine>
            </Link>: <Link to="/home">
            <img src={logo1} alt="" className=" w-32 h-14" />
          </Link>
          }
        
        </div>
        {openMenu ? <ul className="menuItem items-center">{menuItem}</ul> : <ul className="menuItems items-center">{menuItem}</ul>}
        <div className="relative BarsBar" onClick={() => setOpenMenu(!openMenu)}>
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
