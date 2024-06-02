import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

import './MyAppointment.css';
const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const uri = `https://doctors-portal-server-wine-one.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(uri, {
        headers: {
          authorization: ` bearer ${localStorage.getItem('AccessToken')}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="appointmentContainer bg-slate-200 lg:mt-10 -z-10">
      <div className="text-3xl mb-5 font-bold myAppointmentText z-0">
        My Appointment
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Patient Name</th>
              <th>Treatment for</th>
              <th>Mobile Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{booking.Email}</td>
                <td>{booking.TreatmentName}</td>
                <td>{booking.PhoneNumber}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.Slots}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/DashBoard/Payment/${booking._id}`}>
                      <p className="btn btn-sm bg-green-600 text-white">
                        Pay now
                      </p>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <button className="btn btn-xm bg-success text-white">
                      {' '}
                      Paid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
