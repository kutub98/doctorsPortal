import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import "./AppointmentOptions.css";
const AppointmentOptions = ({ options, setTreatment}) => {
  const {_id, name, slots, price } = options;
  


 

  return (
    <div>
      <div className=" appointmentOptions rounded-md shadow-md bg-gray-50 text-gray-800">
        <div className="flex flex-col text-center justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-wide text-primary">{name}</h2>
            <p className="text-gray-800">{slots.length > 0 ? slots[0] : "Try another day"}</p>
            <p>
              {slots.length} {slots.length > 1 ? "Spaces" : "Space"}
            </p>
            <p className="bg-red-600 p-1 rounded text-white w-1/2 my-0 mx-auto">Fees : {price}</p>
          </div>
          
          {/* The button to open modal */}
          <label  htmlFor="bookingModal"
           className="btn bg-primary border-none"
           disabled={slots.length === 0}
           onClick={()=> setTreatment(options)}>
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
