import React from "react";

const AdvertiseProduct = ({ advertisedItem, setAdvertiseModalItem }) => {
  const {
    picture,
    productname,
    location,
    condition,
    price,
    oldPrice,
    yearofpurchase,
  } = advertisedItem;
  console.log(advertisedItem);
  return (
    <div>
      <div className="card card-compact w-full  bg-black text-white pt-7 shadow-xl">
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
          <h2 className="card-title">{productname}</h2>

          <p> Location : {location}</p>
          <p> Condition : {condition}</p>
          <p>year Of used: {yearofpurchase}</p>
          <p>Price : {price}</p>
          <p> Old Price: {oldPrice}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn ">Purchase</button> */}
            <label
              htmlFor="advertise-modal"
              onClick={() => setAdvertiseModalItem(advertisedItem)}
              className="btn btn-warning btn-outline"
            >
              Purchase
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseProduct;
