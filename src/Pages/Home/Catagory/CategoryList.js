import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ catagori }) => {
  const { brand, categoryId, logo } = catagori;
  return (
    <div>
      <div className="card card-compact w-full  bg-black text-white  pt-7 shadow-xl">
        <figure>
          <img
            style={{
              border: "2px solid gray",
              width: "340px",
              height: "270px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>

          <div className="card-actions justify-end">
            <Link to={`/categoriall/${categoryId}`}>
              <button className="btn btn-outline btn-warning ">See More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
