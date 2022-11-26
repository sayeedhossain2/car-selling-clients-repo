import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  // const { user } = useContext(AuthContext);
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allUsers`);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (allUser) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${allUser.name} `
    );
    if (agree) {
      fetch(`http://localhost:5000/sellersDelete/${allUser._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          refetch();
          toast.success("User Deleted Successfully");
        });
    }
  };

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
              <td>{allUser.verify}</td>
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
