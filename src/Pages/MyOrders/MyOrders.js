import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const MyOrders = () => {
  const { data: myOrders = [] } = useQuery({
    queryKey: ["myAllOrders"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/myAllOrders");
      const data = await res.json();
      return data;
    },
  });

  

  return (
    <div>
      <h2 className="text-5xl font-bold">
        this is my orders page{myOrders.length}
      </h2>
      {
        myOrders.map(myorder =>           )
      }
    </div>
  );
};

export default MyOrders;
