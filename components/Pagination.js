import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, i) => {
        return (
          <button key={i} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
