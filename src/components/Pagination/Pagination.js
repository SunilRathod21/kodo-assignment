import React from "react";
import "./Pagination.css";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <button
            className={`page-link ${currentPage === 1 && "disabled"}`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button className=" page-link active">{currentPage}</button>
        </li>
        <li className="page-item">
          <button
            className={`page-link ${currentPage === totalPages && "disabled"}`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
