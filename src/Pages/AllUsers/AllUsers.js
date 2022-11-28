import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import { RingLoader } from "react-spinners";

const AllUsers = () => {
  const { loading } = useContext(AuthContext);
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch(`https://car-selling-server.vercel.app/allUsers`);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (allUser) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${allUser.name} `
    );

    if (agree) {
      fetch(
        `https://car-selling-server.vercel.app/sellersDelete/${allUser._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          refetch();
          toast.success("User Deleted Successfully");
        });
    }
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
          {allUsers.map((allUser, i) => (
            <tr key={i}>
              <td>{allUser.name}</td>
              <td>{allUser.email}</td>
              <td>{allUser.role}</td>
              <td>
                <button className="btn btn-sm btn-outline btn-secondary">
                  verify
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(allUser)}
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

export default AllUsers;
