import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";

import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import Appointments from "../../Pages/Appointment/Appointments";
import Register from "../../Pages/Register/Register";
import Profile from "../../Pages/Dashboard/Profile/Profile";
import EidtProfile from "../../Pages/Dashboard/ViewProfile/EditProfile";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLayOut from "../../Pages/DashboardLayOut/DashboardLayOut";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../../Pages/PrivateRoute/AdminRoute";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";

import DisplayError from "../../Pages/Shared/DisplayErro/DisplayError";
import PaymentPage from "../../Pages/Dashboard/Payment/PaymentPage/PaymentPage";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <DisplayError></DisplayError>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "Home", element: <Home></Home> },
        { path: "Appointment", element: <Appointments></Appointments> },
        { path: "About", element: <PrivateRoute><About></About></PrivateRoute> },
        { path: "Login", element: <Login></Login> },
        { path: "Reviews", element: <Reviews></Reviews> },
        { path: "Register", element: <Register></Register> },
        { path: "Profile", element: <Profile></Profile> },
        { path: "EditProfile", element: <EidtProfile></EidtProfile> }
      ]
    },
      { path: '/DashBoard', element: <PrivateRoute><DashboardLayOut></DashboardLayOut>
      </PrivateRoute>,
      children:[
        {path: "/DashBoard", element: <MyAppointment></MyAppointment>},
        {path: "/DashBoard/AllUsers", element: <AdminRoute><AllUsers></AllUsers></AdminRoute>},
        {path: "/DashBoard/AddADoctor", element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>},
        {path: "/DashBoard/ManageDoctor", element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>},
        {path: "/DashBoard/Payment/:id",
        loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`), element: <AdminRoute> <PaymentPage></PaymentPage></AdminRoute>}
      ]}
  ]);
  

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
