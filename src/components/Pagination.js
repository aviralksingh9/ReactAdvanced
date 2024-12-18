import React, { useState } from "react";

const Pagination = () => {
  const itemsPerPage = 5;
  const items = Array.from({ length: 50 }, (_, index) => `item ${index + 1}`);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div>
      <h1>Paginated List</h1>
      <ul>
        {currentItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage * itemsPerPage === items.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;


