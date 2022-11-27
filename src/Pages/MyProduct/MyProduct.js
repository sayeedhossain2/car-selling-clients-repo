import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { RingLoader } from "react-spinners";
import toast from "react-hot-toast";

const MyProduct = () => {
  const { user, loading } = useContext(AuthContext);
  // const [users, setUsers] = useState(false);
  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myProducts?email=${user?.email}`
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

  const handleAdvertise = (myOrder) => {
    // console.log(myOrder);
    const {
      categoryId,
      condition,
      description,
      email,
      location,
      number,
      oldPrice,
      picture,
      price,
      productname,
      seller,
      sold,
      time,
      yearofpurchase,
      _id,
    } = myOrder;
    const advertised = {
      categoryId,
      condition,
      description,
      email,
      location,
      number,
      oldPrice,
      picture,
      price,
      productname,
      seller,
      sold,
      time,
      yearofpurchase,
      serviceId: _id,
    };
    console.log(advertised);

    fetch("http://localhost:5000/advertised", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(advertised),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Advertise added successfully");
        }
      });
  };

  const handleDelete = (myOrder) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${myOrder.productname} `
    );

    if (agree) {
      fetch(`http://localhost:5000/myProductDelete/${myOrder._id}`, {
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
              <th>Sales Status</th>
              <th>Promote</th>
              <th>Action</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((myOrder, i) => (
              <tr key={i}>
                <td></td>
                <th>
                  <img
                    className=" rounded-full w-20 h-16"
                    src={myOrder?.picture}
                    alt=""
                  />
                </th>

                <td>{myOrder?.productname}</td>
                <td>${myOrder?.price}</td>
                <td>${myOrder?.oldPrice}</td>
                <td>{myOrder?.location}</td>

                <td>
                  <button className="btn btn-warning btn-sm">
                    {myOrder?.sold}
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => handleAdvertise(myOrder)}
                    className="btn btn-secondary btn-sm"
                  >
                    Advertise
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(myOrder)}
                    className="btn btn-secondary btn-sm"
                  >
                    Delete
                  </button>
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
