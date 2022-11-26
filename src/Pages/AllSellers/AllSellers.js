import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allSellers`);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (allSeller) => {
    fetch(`http://localhost:5000/sellersDelete/${allSeller._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("Sellers Deleted Successfully");
      });
  };

  return (
    <div>
      <h2 className=" text-center text-3xl font-bold my-7 text-orange-600">
        All Sellers: {allSellers.length}
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
          {allSellers.map((allSeller) => (
            <tr>
              {/* <th>
                  <img
                    className=" rounded-full w-20 h-20"
                    src={myOrder.picture}
                    alt=""
                  />
                </th> */}
              <td>{allSeller.name}</td>
              <td>{allSeller.email}</td>
              <td>{allSeller.role}</td>
              <td>{allSeller.verify}</td>
              <td>
                <button
                  onClick={() => handleDelete(allSeller)}
                  className="btn btn-sm btn-outline btn-secondary"
                >
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

export default AllSellers;
