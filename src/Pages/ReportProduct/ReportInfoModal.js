import React from "react";

const ReportInfoModal = ({
  reportproduct,
  setReviewinfodata,
  handleDeleteReport,
}) => {
  const { picture, productname, price, sold, location, reportInfo, reportID } =
    reportproduct;
  return (
    <tr>
      <td></td>
      <th>
        <img className=" rounded-full w-20 h-20" src={picture} alt="" />
      </th>

      <td>{productname}</td>
      <td>${price}</td>
      <td>{sold}</td>
      <td>{location}</td>

      <td>
        <button onClick={() => setReviewinfodata(reportproduct)}>
          <label htmlFor="reportReview" className="btn btn-primary btn-sm ">
            View
          </label>
        </button>
      </td>

      <td>
        <button
          onClick={() => handleDeleteReport(reportID)}
          className="btn btn-error btn-sm"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default ReportInfoModal;
