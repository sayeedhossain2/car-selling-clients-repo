import React from "react";
import car from "../../../assets/car.jpg";

const BannerHome = () => {
  return (
    <div className="  my-6 ">
      <figure>
        <img className="w-full rounded-xl md:h-[80vh]" src={car} alt="Shoes" />
      </figure>
      <div className="card-body"></div>
    </div>
  );
};

export default BannerHome;
