import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import BannerHome from "../BannerHome/BannerHome";
import UsedDescribtion from "../BannerHome/UsedDescribtion";
import Catagory from "../Catagory/Catagory";
import { RingLoader } from "react-spinners";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <h1 className=" flex justify-center mt-32 items-center">
        <RingLoader color="#36d7b7" />
      </h1>
    );
  }
  return (
    <div>
      <BannerHome></BannerHome>
      <Catagory></Catagory>
      <UsedDescribtion></UsedDescribtion>
    </div>
  );
};

export default Home;
