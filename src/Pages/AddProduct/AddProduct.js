import React from "react";
import toast from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productname = form.productname.value;
    const price = form.price.value;

    const condition = form.condition.value;
    const number = form.number.value;
    const location = form.location.value;
    const yearofpurchase = form.yearofpurchase.value;
    const description = form.description.value;
    const yourname = form.yourname.value;
    const email = form.email.value;
    const image = form.image.value;
    console.log(
      yourname,
      email,
      image,
      productname,
      price,
      number,
      condition,
      yearofpurchase,
      location,
      description
    );
    toast.success("product added successfully");
  };

  return (
    <div>
      <h2 className="text-5xl text-red-600">this is add a product</h2>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleAddProduct} className="card-body">
              <h1 className="text-5xl font-bold">Please Add a Product!</h1>

              {/* 8 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="yourname"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              {/* 9 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your Email"
                  className="input input-bordered"
                />
              </div>
              {/* 9 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Product Image"
                  className="input input-bordered"
                />
              </div>

              {/*  1 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="productname"
                  placeholder="Product Name"
                  className="input input-bordered"
                />
              </div>
              {/* 2 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                />
              </div>
              {/* 3 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Condition</span>
                </label>
                <input
                  type="text"
                  name="condition"
                  placeholder="Condition"
                  className="input input-bordered"
                />
              </div>
              {/* 4 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
              </div>
              {/* 5 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered"
                />
              </div>
              {/* 6 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Year of purchase</span>
                </label>
                <input
                  type="number"
                  name="yearofpurchase"
                  placeholder="Year of purchase"
                  className="input input-bordered"
                />
              </div>
              {/* 7 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered"
                />
              </div>

              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="your Email"
                  className="input input-bordered"
                />
              </div> */}
              {/* 9 */}
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="your Email"
                  className="input input-bordered"
                />
              </div> */}
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Category</span>
                </label>
                <select
                  name="role"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
              </div> */}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
