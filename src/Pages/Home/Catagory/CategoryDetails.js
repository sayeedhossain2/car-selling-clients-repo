import React from "react";

const CategoryDetails = ({ products }) => {
  const {
    name,
    price,
    picture,
    location,
    time,
    sold,
    condition,
    used,
    originalPrice,
    brand,
    authenticity,
    features,
    Describetion,
  } = products;
  return (
    <div>
      <div className="card w-96 bg-black text-white p-3 shadow-xl">
        <figure>
          <img src={picture} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p> Price : {price}</p>
          <p> Location : {location}</p>
          <p> Time : {time}</p>
          <p> Sold : {sold}</p>
          <p> Condition : {condition}</p>
          <p> Used : {used}</p>
          <p> OriginalPrice: {originalPrice}</p>
          <p> Brand : {brand}</p>
          <p> Authenticity : {authenticity}</p>
          <p> Features : {features}</p>
          <p> Describetion : {Describetion}</p>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
