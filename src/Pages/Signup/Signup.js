import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  const { createUser, googleUserLogin, userNameUpdate } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleUserSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const verify = false;
    console.log(name, email, password, role);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError("");
        const userName = {
          displayName: name,
        };

        userNameUpdate(userName)
          .then(() => {
            saveUser(name, email, role, verify);
          })
          .catch((error) => {});
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const saveUser = (name, email, role, verify) => {
    const user = { name, email, role, verify };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        navigate("/");
        toast.success("User created successfully");
      });
  };

  const handleWithGoogle = () => {
    googleUserLogin(googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const role = "user";
        const verify = false;
        saveUser(user.displayName, user.email, role, verify);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUserSignup} className="card-body">
              <h1 className="text-5xl font-bold">Signup now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Category</span>
                </label>
                <select
                  name="role"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="user">User</option>
                  <option value="seller">Seller</option>
                </select>
              </div>

              <p className="text-red-500  font-bold">{error}</p>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p>
                Already have an account{" "}
                <Link to="/login" className="text-blue-500">
                  {" "}
                  Please Login{" "}
                </Link>
              </p>
            </form>
            <div className="-mt-5 mb-5">
              <button
                onClick={handleWithGoogle}
                className=" w-4/5   ml-7 btn btn-outline btn-warning"
              >
                <FaGoogle />
                <span className="ml-3 ">Signup via google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
