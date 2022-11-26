import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const getTime = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    return strTime;
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productname = form.productname.value;
    const oldPrice = form.oldPrice.value;
    const price = form.price.value;
    const condition = form.condition.value;
    const number = form.number.value;
    const location = form.location.value;
    const yearofpurchase = form.yearofpurchase.value;
    const description = form.description.value;
    const picture = form.image.value;
    const categoryId = form.category.value;

    const products = {
      seller: user?.displayName,
      email: user?.email,
      picture,
      productname,
      price,
      oldPrice,
      number,
      condition,
      yearofpurchase,
      location,
      description,
      categoryId,
      time: getTime(new Date()),
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
        navigate("/dashboard/myProduct");
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

              {/* 9 */}

              {/* 9 */}

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
              <div className="form-control">
                <input
                  required
                  type="text"
                  name="image"
                  placeholder="Image"
                  className="input input-bordered"
                />
              </div>
              {/* 2 */}

              <div className="form-control">
                <input
                  required
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="form-control mb-3">
                    <input
                      required
                      type="text"
                      name="oldPrice"
                      placeholder="old Price"
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
