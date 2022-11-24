import React from "react";

const CategoryList = ({ catagori }) => {
  //   const { name, slots } = catagori;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        {/* <figure>
         <img src="https://placeimg.com/400/225/arch" alt="" />
       </figure> */}
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold">{catagori.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
