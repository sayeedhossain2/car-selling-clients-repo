import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ catagori }) => {
  const { name, id } = catagori;
  return (
    <div>
      <Link to={`/categoriall/${id}`}>
        <div className="card w-full bg-base-100 shadow-xl image-full">
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold">{name}</h2>
            <h2 className="text-center text-3xl font-bold">{id}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryList;
