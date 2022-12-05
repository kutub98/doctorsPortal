import { format } from "date-fns";
import id from "date-fns/esm/locale/id/index.js";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";

const BookingModal = ({ treatment, selected,setTreatment,setSelected, refetch }) => {
  const { name, slots, price } = treatment;
  const date = format(selected, "PP");
  const {user} = useContext(AuthContext)
  console.log(user)


  const gettingAppointment= (e) =>{
        e.preventDefault()
        const form = e.target;
        const PatientName = form.Name.value;
        const Email = form.Email.value;
        const Slots = form.Slot.value;
        const PhoneNumber = form.PhoneNumber.value;
        console.log(PatientName, Slots, PhoneNumber, date)

        const booking ={
            appointmentDate: date,
            TreatmentName: name,
            patientName: PatientName,
            Email,
            Slots,
            PhoneNumber,
            price
        }

        fetch('http://localhost:5000/bookings', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
          // console.log(data)
         if(data.acknowledged){
         
          toast.success('Booking Confirmed')
          refetch()
          setTreatment(null)
         }
         else{
          toast.error(data.message)
         }
        })
        

        // console.log(booking)
       
  }
  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
        <div className="mb-3">
              <input
                type="text"
                name="Treatment"
                readOnly
                value={name}
                className="w-full py-3 px-3 text-base font-bold  bg-slate-50"
              />
            </div>
          <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <form action="" onSubmit={gettingAppointment}>
            <div className="mb-3">
              <input
                type="text"
                name="Name"
                defaultValue={user?.displayName}
                disabled
                placeholder="Name"
                className="w-full py-3 px-3 text-base font-bold  bg-slate-50"
              />
            </div>
            {/* <div className="mb-3">
              <input
                type="time"
                name="Name"
                placeholder="Name"
                className="w-full py-3 px-3 text-base font-bold  bg-slate-50"
              />
            </div>
            <div className="mb-3">
              <input
                type="date"
                name="Name"
                placeholder="Name"
                className="w-full py-3 px-3 text-base font-bold  bg-slate-50"
              />
            </div> */}
            <div className="mb-3">
              <input
                type="email"
                name="Email"
                disabled
                defaultValue={user?.email}
                placeholder="Email"
                className="w-full py-3 px-3 text-base font-bold  bg-slate-50"
              />
            </div>
            
            <div className="mb-3">
                <label htmlFor="">Select time</label>
              <select name="Slot" className="py-3 px-3 text-base font-bold bg-slate-100 w-full">
              <option defaultValue="Select Your time">Select Your time</option>
                {
                    slots.map((Slot, i) => <option value={Slot} key={i}>{Slot}</option>)
                }
              </select>
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="PhoneNumber"
                placeholder="Phone Number"
                className="w-full py-3 px-3 text-base font-bold  bg-slate-50"
              />
            </div>
            <button type="submit" className="w-full bg-primary my-9">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
