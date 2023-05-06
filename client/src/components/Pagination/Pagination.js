import React from "react";
import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
      )}
      {currentPage < totalPages && (
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
