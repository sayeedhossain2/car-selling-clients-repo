import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { user, loading } = useContext(AuthContext);
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

  if (loading) {
    return (
      <h1 className=" flex justify-center mt-32 items-center">
        <RingLoader color="#36d7b7" />
      </h1>
    );
  }
  return (
    <div>
      <h2 className="text-5xl font-bold flex justify-center my-10">
        Total Orders: {myOrders.length}
      </h2>

      <div className=" mt-10 grid  gap-10 md:grid-cols-2">
        {myOrders.map((myorder) => (
          <div className="  card w-full p-4 text-white bg-black">
            <figure>
              <img
                className="mt-3"
                style={{
                  width: "340px",
                  height: "270px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
                src={myorder.picture}
                alt="Shoes"
              />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title">{myorder.productName}</h2>
              <div>
                <div>
                  <p>Name: {myorder.username}</p>
                  <p>Email: {myorder.email}</p>
                  <p>Price: {myorder.price}</p>
                </div>
                <div>
                  <p>Number: {myorder.number}</p>
                  <p>Location: {myorder.location}</p>
                </div>
              </div>

              {!myorder.paid && (
                <Link to={`/dashboard/payment/${myorder._id}`}>
                  <button className=" w-1/3 absolute bottom-0 right-3 btn btn-error  btn-sm">
                    Pay Now
                  </button>
                </Link>
              )}

              {myorder.paid && (
                <Link to={`/dashboard/payment/${myorder._id}`}>
                  <button className=" w-1/3 absolute bottom-0 right-3 btn btn-success   btn-sm">
                    Paid
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default MyOrders;
