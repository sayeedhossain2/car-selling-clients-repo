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
    const picture = form.image.value;
    const categoryId = parseInt(form.category.value);
    console.log(
      yourname,
      email,
      picture,
      productname,
      price,
      number,
      condition,
      yearofpurchase,
      location,
      description,
      categoryId
    );

    const products = {
      yourname,
      email,
      picture,
      productname,
      price,
      number,
      condition,
      yearofpurchase,
      location,
      description,
      categoryId,
    };
    console.log(products);

    fetch("http://localhost:5000/allProducts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("product added successfully");
        event.target.reset();
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form
              onSubmit={handleAddProduct}
              className="card-body bg-teal-300 rounded-xl mt-5  "
            >
              <h1 className="text-5xl font-bold mb-5">Please Add a Product!</h1>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">
                    Please Select Category
                  </span>
                </label>
                <select
                  name="category"
                  className="select select-bordered w-full "
                >
                  <option value={1}>Tesla</option>
                  <option value={2}>Honda</option>
                  <option value={3}>Toyota</option>
                </select>
              </div>
              {/* 8 */}
              <div className="form-control">
                <input
                  required
                  type="text"
                  name="yourname"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              {/* 9 */}
              <div className="form-control">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="your Email"
                  className="input input-bordered"
                />
              </div>
              {/* 9 */}
              <div className="form-control">
                <input
                  required
                  type="text"
                  name="image"
                  placeholder="Product Image"
                  className="input input-bordered"
                />
              </div>

              {/*  1 */}
              <div className="form-control">
                <input
                  required
                  type="text"
                  name="productname"
                  placeholder="Product Name"
                  className="input input-bordered"
                />
              </div>
              {/* 2 */}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="form-control mb-3">
                    <input
                      required
                      type="text"
                      name="price"
                      placeholder="Price"
                      className="input input-bordered"
                    />
                  </div>
                  {/* 3 */}
                  <div className="form-control mb-3">
                    <input
                      required
                      type="text"
                      name="condition"
                      placeholder="Condition"
                      className="input input-bordered"
                    />
                  </div>
                  {/* 4 */}
                  <div className="form-control mb-3">
                    <input
                      required
                      type="number"
                      name="number"
                      placeholder="Phone Number"
                      className="input input-bordered"
                    />
                  </div>
                </div>

                <div>
                  <div className="form-control mb-3">
                    <input
                      required
                      type="text"
                      name="location"
                      placeholder="Location"
                      className="input input-bordered"
                    />
                  </div>
                  {/* 6 */}
                  <div className="form-control mb-3">
                    <input
                      required
                      type="number"
                      name="yearofpurchase"
                      placeholder="Year of purchase"
                      className="input input-bordered"
                    />
                  </div>
                  {/* 7 */}
                  <div className="form-control mb-3">
                    <input
                      required
                      type="text"
                      name="description"
                      placeholder="Description"
                      className="input input-bordered"
                    />
                  </div>
                </div>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-warning"
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
