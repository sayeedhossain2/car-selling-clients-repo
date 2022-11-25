import React from "react";

const UsedDescribtion = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 bg-green-100 my-14 p-5  gap-5">
      <img
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80"
        alt=""
      />
      <p className="flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-bold">
          {" "}
          Used Car Information
        </h1>{" "}
        <br />
        The global used car market size was valued at USD 1.57 trillion in 2021
        and is expected to expand at a compound annual growth rate (CAGR) of
        6.1% from 2022 to 2030. The used car shipment was recorded at 120.3
        million units in 2021. The market has witnessed significant growth in
        the last few years as the price competitiveness among the new players
        has been one glowing spot in the used car industry. The inability of
        customers to buy new cars became one of the reasons for the growing used
        cars sales volume, which is complemented by the investments made by the
        industry participants to establish their dealership network in the
        market. These dealership networks helped market participants to brand
        and make used car options viable.
      </p>
    </div>
  );
};

export default UsedDescribtion;
