import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ReportInfoModal from "./ReportInfoModal";

const ReportProduct = () => {
  // const [showModal, setShowModal] = useState(false);
  const [reviewinfodata, setReviewinfodata] = useState({});

  const { data: reportproducts = [], refetch } = useQuery({
    queryKey: ["reportproduct"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/reportproduct");
      const data = await res.json();
      return data;
    },
  });
  console.log(reviewinfodata.price);

  return (
    <div>
      <h2>this is report{reportproducts.length}</h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>sold</th>
              <th>location</th>
              <th>report</th>
              <th>Action</th>

              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {reportproducts.map((reportproduct, i) => (
              <ReportInfoModal
                key={reportproduct._id}
                reportproduct={reportproduct}
                setReviewinfodata={setReviewinfodata}
                // setShowModal={setShowModal}
              ></ReportInfoModal>
            ))}
          </tbody>
        </table>
      </div>

      {/* {showModal && <ReportInfoModal closeModal={closeModal}></ReportInfoModal>} */}
      {reviewinfodata && (
        <div className="text-center">
          <input type="checkbox" id="reportReview" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="reportReview"
                className="btn btn-sm btn-outline btn-secondary absolute right-2 top-2"
              >
                Your Report
              </label>
              <h3 className="text-lg font-bold">{reviewinfodata.reportInfo}</h3>

              <label
                htmlFor="reportReview"
                className="btn btn-sm mt-10   btn-warning "
              >
                <h1>close</h1>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportProduct;
