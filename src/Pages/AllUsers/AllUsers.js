import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  // const { user } = useContext(AuthContext);
  const { data: allUsers = [] } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allUsers`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className=" text-center text-3xl font-bold my-7 text-orange-600">
        {" "}
        All Users: {allUsers.length}
      </h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Verify</th>
            <th>Action</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((myOrder) => (
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
              <td>
                <button className="btn btn-sm btn-outline btn-secondary">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
