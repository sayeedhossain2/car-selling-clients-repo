import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const { data: myOrders = [] } = useQuery({
    queryKey: ["myAllOrders"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myProducts?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Old Price</th>
              <th>location</th>
              <th>Action</th>
              <th>Payment</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder, i) => (
              <tr>
                <td>{i + 1}</td>
                <th>
                  <img
                    className=" rounded-full w-20 h-20"
                    src={myOrder.picture}
                    alt=""
                  />
                </th>

                <td>{myOrder.seller}</td>
                <td>${myOrder.price}</td>
                <td>${myOrder.oldPrice}</td>
                <td>{myOrder.location}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Delete</button>
                </td>
                <td>
                  <button className="btn btn-warning btn-sm">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
