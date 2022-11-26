import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: myOrders = [] } = useQuery({
    queryKey: ["myAllOrders"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myAllOrders?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-5xl font-bold flex justify-center my-10">
        Total Orders: {myOrders.length}
      </h2>

      <div className=" mt-10 grid  gap-10 grid-cols-2">
        {myOrders.map((myorder) => (
          <div className="  card w-full p-4 text-white bg-black">
            <figure>
              <img src={myorder.picture} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{myorder.productName}</h2>
              <p>Name: {myorder.username}</p>
              <p>Email: {myorder.email}</p>
              <p>Price: {myorder.price}</p>
              <p>Number: {myorder.number}</p>
              <p>Location: {myorder.location}</p>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default MyOrders;
