import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const payments = useLoaderData();

  const { productName, price, booking } = payments;
  console.log(payments.booking);

  return (
    <div className="ml-5">
      <h2 className="text-4xl ">payment for {productName}</h2>
      <h4>
        Please Pay <strong>{price}</strong>
      </h4>
      <div className="w-96 my-10">
        <Elements stripe={stripePromise}>
          <CheckOutForm payments={payments} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
