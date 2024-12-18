import React, { useState } from "react";

const SearchableList = () => {
  const list = ["apple", "banana", "mango"];
  const [products, setProducts] = useState([]);
  const [inputValue, seInputValue] = useState("");
  const handleChange = (e) => {
    seInputValue(e.target.value);
  };
  const filterProducts = () => {
    const filtered = list.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <>
      <h1>Filter Products</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter the product name"
      />
      <button onClick={filterProducts}>🔍</button>
      <ul>
        {products.length > 0 ? (
          products.map((item, index) => {
            return <li key={index}>{item}</li>;
          })
        ) : (
          <li>No items</li>
        )}
      </ul>
    </>
  );
};

export default SearchableList;
