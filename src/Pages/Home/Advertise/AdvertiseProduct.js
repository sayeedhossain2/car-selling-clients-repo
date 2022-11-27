import React from "react";

const AdvertiseProduct = ({ advertisedItem }) => {
  const { picture } = advertisedItem;
  console.log(advertisedItem);
  return (
    <div>
      <h1>Email: {advertisedItem.email}</h1>

      <div className="card card-compact w-full  bg-red-100 pt-7 shadow-xl">
        <figure>
          <img
            style={{
              width: "340px",
              height: "270px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseProduct;
