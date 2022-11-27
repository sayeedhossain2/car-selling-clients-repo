import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { RingLoader } from "react-spinners";

const CategoryDetails = ({ products, setProducts, setReportProduct }) => {
  const { loading, user } = useContext(AuthContext);
  const [verifySeller, setVerifySeller] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/checkEmail?email=${products.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVerifySeller(data.verify);
      });
  }, [products.email]);

  if (loading) {
    return (
      <h1 className=" flex justify-center mt-32 items-center">
        <RingLoader color="#36d7b7" />
      </h1>
    );
  }
  const {
    productname,
    price,
    picture,
    location,
    condition,
    oldPrice,
    verify,
    seller,
    email,
    time,
    yearofpurchase,
  } = products;

  return (
    <div>
      <div className="card w-full bg-black text-white p-3 shadow-xl">
        <div>
          <div className=" flex justify-between">
            <div className="flex">
              <p> {seller}</p>

              {verifySeller && (
                <img
                  className="w-4 ml-1"
                  src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png?fbclid=IwAR2eKi9sFMz_SlTihjLyARvcc2h33HDPsALVW5cky_Jb6touq1wwvXqOjG0"
                  alt=""
                />
              )}
            </div>
            <p>{time}</p>
          </div>
          <p> {email}</p>
        </div>
        <figure>
          <img
            className="mt-3"
            style={{
              width: "340px",
              height: "270px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
            src={picture}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productname}</h2>

          <p> Location : {location}</p>
          <p> Condition : {condition}</p>
          <p>year of Used: {yearofpurchase}</p>
          <p>Price : {price}</p>
          <p> Old Price: {oldPrice}</p>

          <div className="card-actions mt-3 flex justify-between">
            <label
              onClick={() => setReportProduct(products)}
              htmlFor="repoted-items"
              className="btn btn-outline btn-warning"
            >
              Report{" "}
            </label>

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
