import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSellers = () => {
  const { data: allSellers = [] } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allSellers`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2>this is AllSellers{allSellers.length}</h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Verify</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {allSellers.map((myOrder) => (
            <tr>
              {/* <th>
                  <img
                    className=" rounded-full w-20 h-20"
                    src={myOrder.picture}
                    alt=""
                  />
                </th> */}
              <td>{myOrder.name}</td>
              <td>{myOrder.email}</td>
              <td>{myOrder.role}</td>
              <td>{myOrder.verify}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;
