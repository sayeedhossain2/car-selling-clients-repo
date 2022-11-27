import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseProduct from "./AdvertiseProduct";

const Advertise = () => {
  const { data: advertisedItems = [] } = useQuery({
    queryKey: ["advertisedItem"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertisedItem");
      const data = await res.json();
      return data;
    },
  });

  //   console.log(advertisedItem);

  return (
    <div>
      {advertisedItems.length > 0 && (
        <div>
          <h1 className="text-4xl text-center text-orange-600 mt-20 mb-5 font-bold">
            Total Advertise: {advertisedItems.length}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {advertisedItems.map((advertisedItem) => (
              <AdvertiseProduct
                key={advertisedItem._id}
                advertisedItem={advertisedItem}
              ></AdvertiseProduct>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Advertise;
