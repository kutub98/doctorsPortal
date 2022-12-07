import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import Loading from "../../Shared/Loding/Loading";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import BookingModal from "../BookinModal/BookingModal";

const AvailableAppoinment = ({ setSelected, selected }) => {
  // const [appointMentOptions, setAppointMentOption] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selected, "PP");

  // const {data: appointMentOptions =[], isLoading} = useQuery({
  //   queryKey: ['appointMentOptions'],
  //   queryFn: ()=> fetch('https://doctors-portal-server-wine-one.vercel.app/allOptions')
  //   .then(res => res.json())
  // })

  const {
    data: appointMentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(`https://doctors-portal-server-wine-one.vercel.app/allOptions?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  // useEffect(()=> {
  //     fetch('https://doctors-portal-server-wine-one.vercel.app/allOptions')
  //     .then(res => res.json())
  //     .then(data => setAppointMentOption(data))
  // },[])

  // console.log(appointMentOptions)

  return (
    <div>
      <p className="text-center text-2xl my-8 tracking-wide text-primary font-bold">
        {" "}
        You have selected {format(selected, "PP")}
      </p>
      <div className=" px-[10%] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {appointMentOptions.map((ApOp) => (
          <AppointmentOptions key={ApOp._id} options={ApOp} setTreatment={setTreatment}></AppointmentOptions>
        ))}
        {treatment && (
          <BookingModal
            treatment={treatment}
            setTreatment={setTreatment}
            setSelected={setSelected}
            selected={selected}
            // setSelected={setSelected}
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default AvailableAppoinment;
