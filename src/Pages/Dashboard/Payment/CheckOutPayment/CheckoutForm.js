import { CardElement, useCartElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ bookings }) => {
  const [cardError, setCardError] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const { price, Email, _id } = bookings;
  const [clientSecret, setClientSecret] = useState("");
  const [success, SetSuccess] = useState();
  const [processing, SetProcessing] = useState("");
  const [transactionId, SetTransactionId] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://doctors-portal-server-wine-one.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("AccessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: ConfirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: Email,
        },
      },
    });

    if (ConfirmError) {
      setCardError(ConfirmError.message);
      return;
    }
    console.log("PaymentIntent", paymentIntent);

    if ((paymentIntent.status = "successed")) {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        Email,
        bookingId: _id,
      };

      fetch("https://doctors-portal-server-wine-one.vercel.app/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("AccessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          if (res.insertedId) {
            SetSuccess("Congrats! your payment completed");
            SetTransactionId(paymentIntent.id);
          }
        });
    }
    SetProcessing(false);
  };

  return (
    <div className="w-1/2 bg-gray-200 py-6 px-4 rounded-sm my-6">
      <form onSubmit={handleSubmit}>
        <CardElement
          className="block w-full"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn bg-blue-800 text-white p-1 px-8 "
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p>{cardError}</p>
      {success && (
        <div>
          <h1 className="text-green-600 text-lg">{success}</h1>
          <h1 className="text-blue-900">{transactionId}</h1>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
