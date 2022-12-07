import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../../Assest/logo/portal.svg";
import logo2 from "../../../Assest/logo/portal.svg";
// import logo2 from "../../../Assest/logo/portal.svg";
import { MdFormatAlignLeft as RiBarChartHorizontalLine } from "react-icons/md";
import "./Header.css";
import { FaUserAlt, FaSignOutAlt, FaMoon, FaSun } from "react-icons/fa";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [openDashBoard, setOpenDashboard] = useState(false);
  const { user, LogOut } = useContext(AuthContext);
  const [darkLight, setDarkLight] = useState(false);
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

  //dashBoard

  const dashboardMenu = (
    <React.Fragment className="flex items-center">
      <li className="flex items-center">
        <Link to="/DashBoard" className="flex items-center">
          {" "}
           <i class="fa fa-dashboard" aria-hidden="true"> Dashboard</i>
        </Link>
      </li>
      <li onClick={LogOUT}>
            <Link className=" text-xl">Logout</Link>
          </li>
    </React.Fragment>
  );

  /// menuItems
  const userPic = "https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png";
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
          
          <li onClick={() => setOpenMenu(!openMenu)}>
            {/* <Link to="/Profile" className=" text-xl"> */}
            <div className="avatar online " onClick={() => setOpenDashboard(!openDashBoard)}>
              <div className="w-8  rounded-full">
                <img src={user?.uid ? user?.photoURL : userPic} alt="kutub" />
                {openDashBoard ? <ul className="dashBoard">{dashboardMenu}</ul> : null}
                {/* {console.log(openDashBoard)} */}
              </div>
            </div>
            {/* </Link> */}
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/Login" onClick={() => setOpenMenu(!openMenu)} className=" text-xl">
              login
            </Link>
          </li>
          <li onClick={() => setOpenMenu(!openMenu)}>
            <Link className=" text-xl" to="/Register">
              Register
            </Link>
          </li>
        </>
      )}
      <li>
        <div className={`Header ${theme}`}>
          {darkLight ? (
            <button onClick={toggleTheme}>
              <FaMoon />
            </button>
          ) : (
            <button onClick={toggleTheme}>
              <FaSun />
            </button>
          )}
        </div>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navBar">
      <nav className=" flex justify-between py-6 px-[10%] items-center">
        <div className="logo flex">
          <Link to="/home">
            <img src={logo1} alt="" className=" logo1 w-32 h-6" />
          </Link>
          <label htmlFor="dashBoardDrawer">
          <RiBarChartHorizontalLine className="logo2 w-32 h-6 text-black"></RiBarChartHorizontalLine>
          
        
          </label>
          <Link to="/home">
            <img src={logo2} alt="" className=" logo2 w-36 h-16" />
            {/* <div className=" drawer-mobile">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                  Open drawer
                </label>
              </div>
            </div> */}
          </Link>
        </div>
        {openMenu ? <ul className="menuItem">{menuItem}</ul> : <ul className="menuItems">{menuItem}</ul>}
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
