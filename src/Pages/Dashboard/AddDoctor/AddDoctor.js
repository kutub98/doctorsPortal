import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddDoctor = () => {
  const {register,handleSubmit,watch,formState: { errors },
  } = useForm();
  const [customLoading, customSetLoading] = useState(true)
  const imgHostKey = process.env.REACT_APP_imgbb;
  
  // console.log(imgHostKey)
  const { data: specialties , isLoading} = useQuery({
    
    queryKey: ["specialties"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/DoctorSpecialtyAppointment");
      const data = await res.json();
      return data;
    },
  });

  // console.log(specialties);

  const AddDoctor = (event) => {
    // console.log(data);
    const image = event.imageFile[0];
    const fromData = new FormData()
    fromData.append('image', image)
    const url =`https://api.imgbb.com/1/upload?key=${imgHostKey}`
    fetch(url, {
      method: "POST",
      body: fromData,
    })
    .then(res => res.json())
    .then(data => {
      const doctorsInformation = {
        doctorsName: event.name,
        doctorsEmail: event.email,
        doctorsImage: data.data.display_url,
        doctorsSpecialty: event.specialty
      }
      // console.log(doctorsInformation)
      fetch('http://localhost:5000/addedDoctor', {
        method: 'POST',
        headers: {
          'content-type': "application/json",
          authorization: ` bearer ${localStorage.getItem("AccessToken")}`
        },
        body: JSON.stringify(doctorsInformation)
      })
      .then(res => res.json())
      .then( doctor => {
          toast.success(`${event.name} is successfully added`)
      }) 
    })
  };

  if(isLoading){
    return <h1>Loading</h1>
  }


  return (
    <div className="px-[10%] border-l-4 border-primary ">
      <form onSubmit={handleSubmit(AddDoctor)}>
        

        <div className="grid grid-cols-1 gap-2 col-span-full lg:col-span-3">
          {/* {Name field =================} */}
          <div className="col-span-full sm:col-span-3 my-3">
            <label forHtml="name" className=" text-black text-sm font-bold">
              Name
            </label>
            <input
              {...register("name", {required: "name is required"})}
              id="name"
              type="text"
              placeholder="Doctor Name"
              className="w-full py-3 px-2 border border-primary-focus my-2 rounded-md focus:ring focus:ring-opacity-75  dark:border-primary-focus"
            />
            {errors.name && <span>This field is required</span>}
          </div>

          {/* {email field =================} */}
          <div className="col-span-full sm:col-span-3 my-3">
            <label forHtml="email" className=" text-black text-sm font-bold">
              Doctor Email
            </label>
            <input
              {...register("email", {required: "Email is required"})}
              id="email"
              type="text"
              placeholder="Doctor email"
              className="w-full py-3 px-2 border border-primary-focus my-2 rounded-md focus:ring focus:ring-opacity-75  dark:border-primary-focus"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          {/* {selection  =================} */}
          <div className="col-span-full sm:col-span-3 my-3">
            <label forHtml="select" className=" text-black text-sm font-bold">
              Specialty
            </label>
            <select {...register('specialty', {required: "Select an option"} )} className="select w-full py-3 px-2 border border-primary-focus my-2 rounded-md focus:ring focus:ring-opacity-75  dark:border-primary-focus ">
            <option disabled selected value="Select Specialty">Select Specialty</option>
              {specialties.map(specialty => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>
          {/* {image file field =================} */}
          <div className="col-span-full sm:col-span-3 my-3">
            <label forHtml="image file" className=" text-black text-sm font-bold">
              Doctor image file
            </label>
            <input
              {...register("imageFile", {required: "Upload a photo is required"})}
              id="image file"
              type="file"
              placeholder="Doctor email"
              className="w-full py-3 px-2 border border-primary-focus my-2 rounded-md focus:ring focus:ring-opacity-75  dark:border-primary-focus"
            />
            {errors.imageFile && <span>This field is required</span>}
          </div>
        </div>
        {
          customLoading ? <><input
          className=" bg-primary-focus py-2 px-5 rounded cursor-pointer text-white text-lg font-bold "
          value=" Add Doctor is Loading..."
          type="submit"
        /></> : <input
        className=" bg-primary-focus py-2 px-5 rounded cursor-pointer text-white text-lg font-bold "
        value="Added a Doctor"
        type="submit"
      />
        }
      </form>
    </div>
  );
};

export default AddDoctor;
