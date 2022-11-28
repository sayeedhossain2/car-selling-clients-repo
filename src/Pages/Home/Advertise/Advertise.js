import axios from "axios";
import React, { useEffect, useState } from "react";
import AdvertiseModal from "./AdvertiseModal/AdvertiseModal";
import AdvertiseProduct from "./AdvertiseProduct";

const Advertise = () => {
  const [advertisedItems, setAdvertisedItems] = useState([]);
  const [advertiseModalItem, setAdvertiseModalItem] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/advertisedItem").then((data) => {
      setAdvertisedItems(data.data);
      // console.log(data);
    });
  }, []);
  // console.log(advertisedItems);

  return (
    <div>
      {advertisedItems?.length > 0 && (
        <div>
          <h1 className="text-4xl text-center text-orange-600 mt-20 mb-5 font-bold">
            Total Advertise: {advertisedItems.length}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {advertisedItems.map((advertisedItem) => (
              <AdvertiseProduct
                key={advertisedItem._id}
                advertisedItem={advertisedItem}
                setAdvertiseModalItem={setAdvertiseModalItem}
              ></AdvertiseProduct>
            ))}
          </div>
        </div>
      )}
      {advertiseModalItem && (
        <AdvertiseModal
          advertiseModalItem={advertiseModalItem}
          setAdvertiseModalItem={setAdvertiseModalItem}
        ></AdvertiseModal>
      )}
    </div>
  );
};

export default Advertise;
