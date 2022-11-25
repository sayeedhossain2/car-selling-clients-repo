import React from "react";

const CategoryDetails = ({ products, setProducts }) => {
  const {
    name,
    price,
    picture,
    location,
    verified,
    seller,
    condition,
    used,
    originalPrice,
    brand,
    email,
    // authenticity,
    // features,
    // describetion,
  } = products;

  return (
    <div>
      <div className="card w-96 bg-black text-white p-3 shadow-xl">
        <div>
          <div className="flex">
            <p> {seller}</p>

            {verified && (
              <img
                className="w-4 ml-1"
                src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png?fbclid=IwAR2eKi9sFMz_SlTihjLyARvcc2h33HDPsALVW5cky_Jb6touq1wwvXqOjG0"
                alt=""
              />
            )}
          </div>
          <p> {email}</p>
        </div>
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

          <p> Condition : {condition}</p>
          <p> Used : {used}</p>
          <p> OriginalPrice: {originalPrice}</p>
          <p> Brand : {brand}</p>
          {/* <p> Authenticity : {authenticity}</p>
          <p> Features : {features}</p>
          <p> Describetion : {describetion}</p> */}

          <div className="card-actions justify-end">
            {/* <button className="btn btn-outline btn-warning">Book Now</button> */}
            <label
              onClick={() => setProducts(products)}
              htmlFor="Car-booking"
              className="btn btn-outline btn-warning"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
