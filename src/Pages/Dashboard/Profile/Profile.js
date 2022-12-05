import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import EidtProfile from "../ViewProfile/EditProfile";

const Profile = () => {
  const {user, LogOut} = useContext(AuthContext)
    


  return (
    <div className="flex">
      HELLO
    </div>
  );
};

export default Profile;
