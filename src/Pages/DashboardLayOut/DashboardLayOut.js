import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import MyAppointment from "../Dashboard/MyAppointment/MyAppointment";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { FaClipboardList, FaNotesMedical , FaUserCog,FaUsers } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";

const DashboardLayOut = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile z-0">
        <input id="dashBoardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashBoardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/DashBoard">
                {" "}
                <FaClipboardList /> My Appointments
              </Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/DashBoard/AllUsers">
                    {" "}
                    <FaUsers /> All Users
                  </Link>
                </li>
                <li>
                  <Link to="/DashBoard/AddADoctor">
                    {" "}
                    <FaNotesMedical /> Add Doctor
                  </Link>
                </li>
                <li>
                  <Link to="/DashBoard/ManageDoctor">
                    {" "}
                    <FaUserCog /> Manage Doctor
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DashboardLayOut;
