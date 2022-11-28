import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const AdvertiseModal = ({ advertiseModalItem, setAdvertiseModalItem }) => {
  const { user } = useContext(AuthContext);
  console.log(advertiseModalItem);

  const {
    // categoryId,
    // condition,
    // description,
    // email,
    // location,
    // number,
    // oldPrice,
    picture,
    price,
    productname,
    // time,
    // seller,
    // serviceId,
    // sold,
    // yearofpurchase,
    // _id,
  } = advertiseModalItem;

  const handleModalData = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const price = form.price.value;
    const email = form.usermail.value;
    const productName = form.productName.value;
    const number = form.number.value;
    const location = form.location.value;
    // console.log(username, price, email, productName, number, location);
    const paid = false;
    const myOrders = {
      username,
      price,
      email,
      productName,
      number,
      location,
      picture,
      paid,
    };

    fetch("http://localhost:5000/myOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdvertiseModalItem(null);
        toast.success("Item is Booked");
      });
  };

  return (
    <div>
      <input type="checkbox" id="advertise-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="advertise-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          {/* start */}

          <form
            onSubmit={handleModalData}
            className="grid grid-cols-1 gap-3 mt-4"
          >
            <input
              type="text"
              name="username"
              value={user?.displayName}
              disabled
              placeholder="User name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="usermail"
              value={user?.email}
              disabled
              placeholder="Your Email"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="productName"
              value={productname}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="price"
              value={price}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="number"
              name="number"
              placeholder="Your Phone Number"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              className="input input-bordered w-full "
            />

            <br />
            <input
              className="w-full btn btn-primary"
              type="submit"
              value="Submit"
            />
          </form>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default AdvertiseModal;
