import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import da from "date-fns/esm/locale/da/index.js";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckOutPayment/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_Strip_PK);
console.log(stripePromise);
const PaymentPage = () => {
  const bookings = useLoaderData();
  const { TreatmentName, PhoneNumber, appointmentDate, Slots, price, Email} = bookings;

  console.log(bookings);
  return (
    <div>
      <h1 className="  text-2xl text-black font-bold"> Payment</h1>
      <div>
        <h1>
          Please for <span className="text-primary text-2xl font-extrabold">{TreatmentName}</span>{" "}
        </h1>

        <h1>
          Please pay <strong className="text-red-500">{price} taka </strong> for {TreatmentName} on date{" "}
          {appointmentDate} at {Slots}
        </h1>
      </div>

      {/* checkOutForm */}
      <Elements stripe={stripePromise}>
        <CheckoutForm 
        bookings= {bookings}/>
      </Elements>
    </div>
  );
};

export default PaymentPage;
