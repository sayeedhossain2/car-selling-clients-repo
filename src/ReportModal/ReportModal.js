import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/AuthProvider";
// import app from "../firebase/firebase.config";

const ReportModal = ({ reportProduct, setReportProduct }) => {
  const { user } = useContext(AuthContext);
  const {
    productname,
    price,
    picture,
    categoryId,
    condition,
    description,
    email,
    location,
    number,
    oldPrice,
    seller,
    time,
    sold,
    yearofpurchase,
  } = reportProduct;
  console.log(reportProduct);

  const handleModalReportData = (event) => {
    event.preventDefault();
    const reportInfo = event.target.reportvalue.value;
    console.log(reportInfo);

    const reportReview = {
      productname,
      price,
      picture,
      categoryId,
      condition,
      description,
      email,
      location,
      number,
      oldPrice,
      seller,
      time,
      yearofpurchase,
      reportInfo,
      sold,
      reporterName: user?.displayName,
      reporterEmail: user?.email,
    };

    console.log(reportReview);

    fetch("http://localhost:5000/allReport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportReview),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        setReportProduct(null);
        toast.success("Report posted Successfully");
      });
  };

  return (
    <div>
      <input type="checkbox" id="repoted-items" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="repoted-items"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5"> {productname}</h3>

          <form onSubmit={handleModalReportData}>
            <textarea
              className="border-2 resize-none border-gray-300 w-full h-32"
              name="reportvalue"
            ></textarea>

            <input
              className="w-full btn btn-success"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
