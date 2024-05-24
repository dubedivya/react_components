import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generateNoOfPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };
  return (
    <div className="pagination">
      <button
        className="pagination-btn prev-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {generateNoOfPages().map((pageNo, index) => (
        <button
          key={index}
          className={`pagination-btn ${currentPage === pageNo ? "active" : ""}`}
          onClick={() => onPageChange(pageNo)}
        >
          {pageNo}
        </button>
      ))}
      <button
        className="pagination-btn next-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
