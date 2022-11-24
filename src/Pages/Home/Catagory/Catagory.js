import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";

const Catagory = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/carCategories")
      .then((res) => res.json())
      .then((data) => {
        setCatagories(data);
      });
  }, []);

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-3 ">
      {catagories.map((catagori) => (
        <CategoryList key={catagori._id} catagori={catagori}></CategoryList>
      ))}
    </div>
  );
};

export default Catagory;
