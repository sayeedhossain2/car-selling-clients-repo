import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { RingLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthProvider";

const AllSellers = () => {
  const { loading } = useContext(AuthContext);
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch(
        ` https://car-selling-server.vercel.app/allSellers`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (allSeller) => {
    const agree = window.confirm(`Are you sure you want to delete `);
    if (agree) {
      fetch(
        ` https://car-selling-server.vercel.app/sellersDelete/${allSeller._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
          toast.success("Sellers Deleted Successfully");
        });
    }
  };

  const handleVerified = (id) => {
    console.log(id);
    fetch(` https://car-selling-server.vercel.app/verifiedStatus/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("Sellers verified Successfully");
      });
  };

  if (loading) {
    return (
      <h1 className=" flex justify-center mt-32 items-center">
        <RingLoader color="#36d7b7" />
      </h1>
    );
  }

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
          {allSellers.map((allSeller, i) => (
            <tr key={i}>
              <td>{allSeller.name}</td>
              <td>{allSeller.email}</td>
              <td>{allSeller.role}</td>

              <td>
                {allSeller.verify ? (
                  <button className="btn btn-sm  btn-success ">verifyed</button>
                ) : (
                  <button
                    onClick={() => handleVerified(allSeller._id)}
                    className="btn btn-sm  btn-secondary"
                  >
                    verify
                  </button>
                )}
              </td>
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
