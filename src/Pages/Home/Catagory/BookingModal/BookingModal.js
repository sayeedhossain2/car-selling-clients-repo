import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({ product, setProducts }) => {
  const { user } = useContext(AuthContext);
  const { name, price } = product;

  const handleModalData = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const price = form.price.value;
    const email = form.usermail.value;
    const productName = form.productName.value;
    const number = form.number.value;
    const location = form.location.value;
    console.log(username, price, email, productName, number, location);
    setProducts(null);
    toast.success("user Informed successfully");
  };

  return (
    <div>
      <input type="checkbox" id="Car-booking" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Car-booking"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

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
              value={name}
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
        </div>
      </div>
    </div>
  );
};

export default BookingModal;