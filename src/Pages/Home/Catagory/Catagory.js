import React from "react";
import CategoryList from "./CategoryList";

const Catagory = () => {
  //   const [catagories, setCatagories] = useState([]);

  //   const url = "catagories.json";

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setCatagories(data);
  //       });
  //   }, []);

  const catagories = [
    { id: 1, name: "Tesla" },
    { id: 2, name: "Honda" },
    { id: 3, name: "Toyota" },
  ];

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-3 ">
      {catagories.map((catagori) => (
        <CategoryList key={catagori.id} catagori={catagori}></CategoryList>
      ))}
    </div>
  );
};

export default Catagory;
