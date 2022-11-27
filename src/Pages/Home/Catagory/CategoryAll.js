import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import CategoryDetails from "./CategoryDetails";
import ReportModal from "../../../ReportModal/ReportModal";

const CategoryAll = () => {
  const categoryCar = useLoaderData();
  const [product, setProducts] = useState(null);
  const [reportProduct, setReportProduct] = useState(null);

  // console.log(categoryCar);

  return (
    <div>
      <div className=" mt-10 gap-10  grid grid-cols-1 md:grid-cols-3   ">
        {categoryCar.map((products, i) => (
          <CategoryDetails
            key={i}
            setProducts={setProducts}
            products={products}
            reportProduct={reportProduct}
            setReportProduct={setReportProduct}
          ></CategoryDetails>
        ))}
      </div>
      {product && (
        <BookingModal
          product={product}
          setProducts={setProducts}
        ></BookingModal>
      )}

      {reportProduct && (
        <ReportModal
          reportProduct={reportProduct}
          setReportProduct={setReportProduct}
        ></ReportModal>
      )}
    </div>
  );
};

export default CategoryAll;

// json

/* 
const cars =
[
    {
   "categoryId": 1,
   "brand":"Tesla",

  
       "name": "Tesla",
       "price": "1550000 ",
       "picture":"https://i.ibb.co/SrrmfvN/tesla.jpg",
       "location":"Dhaka mirpur- 1",
       "time": "3.00 pm",
       "sold": "available",
       "condition ":"used",
       "used": "1 year",
       "originalPrice": 700000,
       "brand": "Toyota",
       "model": "Tesla 409",
       "authenticity": "original",
       "features": "Autopilot,Caraoke, Bioweapon defense mode ,Touchscreen, Streaming and video gaming,Web browser,Easter eggs, Air suspension",
       "Describetion": "All Tesla models are equipped with a driver assistance system called Autopilot. "
   
     },
     {
        "name": "Tesla",
        "price": "1550000 ",
        "picture":"https://i.ibb.co/SrrmfvN/tesla.jpg",
        "location":"Dhaka mirpur- 1",
        "time": "3.00 pm",
        "sold": "available",
        "condition ":"used",
        "used": "1 year",
        "originalPrice": 2700000,
        "brand": "Toyota",
        "model": "Tesla 409",
        "authenticity": "original",
        "features": "Autopilot,Caraoke, Bioweapon defense mode ,Touchscreen, Streaming and video gaming,Web browser,Easter eggs, Air suspension",
        "describetion": "All Tesla models are equipped with a driver assistance system called Autopilot. "
    
      },
   


    {
   "categoryId": 2,
   "brand":"Honda",
  
       "name": "Honda",
       "price": "1000000 ",
       "picture":"https://i.ibb.co/QYTV2Kx/civic.jpg",
       "location":"Dhaka mirpur- 10",
       "time": "5.00 pm",
       "sold": "available",
       "condition ":"used",
       " used": "1 year",
       "originalPrice": 1700000,
       "brand": "Toyota",
       "model": "Honda civic 409",
       "authenticity": "original",
       "Features": "Touchscreen, Streaming and video gaming,Web browser,Easter eggs, Air suspension",
       "describetion": " The Honda City is smartly styled with dignified stature and superior technological prowess. A wide, upper-grill in the front presents the signature Honda Solid Wing Face, and elevates the car to a position of prominence"
   
     },
     {
        "name": "Honda",
        "price": "1000000 ",
        "picture":"https://i.ibb.co/QYTV2Kx/civic.jpg",
        "location":"Dhaka mirpur- 10",
        "time": "5.00 pm",
        "sold": "available",
        "condition ":"used",
        " used": "1 year",
        "originalPrice": 1700000,
        "brand": "Toyota",
        "model": "Honda civic 409",
        "authenticity": "original",
        "features": "Touchscreen, Streaming and video gaming,Web browser,Easter eggs, Air suspension",
        "describetion": " The Honda City is smartly styled with dignified stature and superior technological prowess. A wide, upper-grill in the front presents the signature Honda Solid Wing Face, and elevates the car to a position of prominence"
    
      },
   
    {
   "categoryId": 3,
   "brand": "Toyota",
   "products" : [ 
     {
       "name": "Toyota",
       "price": "600000 ",
       "picture":"https://i.ibb.co/SrrmfvN/tesla.jpg",
       "location":"Dhaka mirpur- 2",
       "time": "4.00 pm",
       "sold": "available",
       "condition ":"used",
       " used": "1 year",
       "originalPrice": 700000,
       "brand": "Toyota",
       "model": "Toyota Corolla",
       "authenticity": "original",
       "features": "Turning corners and heads,Modern, yet timeless.,Built for comfort and speed.",
       "describetion": "Toyota has car models that offer something for everyone. Whether you’re looking for a compact car for commuting to work, a fun sports car, or a family vehicle to safely transport your loved ones wherever they need to go, you can rely on Toyota. "
   
     },
     {
        "name": "Toyota",
        "price": "600000 ",
        "picture":"https://i.ibb.co/SrrmfvN/tesla.jpg",
        "location":"Dhaka mirpur- 2",
        "time": "4.00 pm",
        "sold": "available",
        "condition ":"used",
        " used": "1 year",
        "originalPrice": 700000,
        "brand": "Toyota",
        "model": "Toyota Corolla",
        "authenticity": "original",
        "features": "Turning corners and heads,Modern, yet timeless.,Built for comfort and speed.",
        "describetion": "Toyota has car models that offer something for everyone. Whether you’re looking for a compact car for commuting to work, a fun sports car, or a family vehicle to safely transport your loved ones wherever they need to go, you can rely on Toyota. "
    
      }
   ]
}
]
 */

// [
//    "categoryId": 2,
//    "alcars" : [  {
//        "name": "honda car 1",
//        "price": "10000 "
//      },
//      {
//        "name": "honda car 2",
//        "price": "10000 "
//      }]
//    ]

//     [
//    "categoryId": 2,
//    "alcars" : [  {
//        "name": "honda car 1",
//        "price": "10000 "
//      },
//      {
//        "name": "honda car 2",
//        "price": "10000 "
//      }]
//    ]

//  ]
