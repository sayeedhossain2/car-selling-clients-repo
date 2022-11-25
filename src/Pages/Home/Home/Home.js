import React from "react";
import BannerHome from "../BannerHome/BannerHome";
import UsedDescribtion from "../BannerHome/UsedDescribtion";
import Catagory from "../Catagory/Catagory";

const Home = () => {
  return (
    <div>
      <BannerHome></BannerHome>
      <Catagory></Catagory>
      <UsedDescribtion></UsedDescribtion>
    </div>
  );
};

export default Home;
