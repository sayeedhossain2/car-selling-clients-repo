import React from "react";
import car from "../../../assets/car.jpg";

const BannerHome = () => {
  return (
    <div className="hero my-10 bg-base-200 rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <img src={car} className=" rounded-lg w-1/2 mr-10 shadow-2xl" alt="" />
        <div>
          <h1 className="text-3xl font-bold">
            Sell Your Car At The Best Price!
          </h1>
          <p className="py-6">
            Experience the simplest way of selling your car with Spinny. Book
            free evaluation today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
