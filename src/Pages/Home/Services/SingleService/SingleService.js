import React from "react";
import PrimaryButton from "../../../PrimaryButton/PrimaryButton";
import './SingleService.css'
const SingleService = ({ service }) => {
  const { name, img } = service;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className=" p-5 ">
          <h2 className="card-title">{name}</h2>
        
          <div className="buttonsGroup mt-4">
           <PrimaryButton> Appointment</PrimaryButton>
            <button className="btn ">More Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
