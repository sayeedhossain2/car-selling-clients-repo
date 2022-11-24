import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ catagori }) => {
  const { Brand, categoryId } = catagori;
  return (
    <div>
      <Link to={`/categoriall/${categoryId}`}>
        <div className="card w-full bg-base-100 shadow-xl image-full">
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold">{Brand}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryList;
