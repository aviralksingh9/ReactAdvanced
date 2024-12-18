import React, { useCallback, useMemo, useState } from "react";

const ListFilterOptimization = () => {
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
  ];
  const [query, setQuery] = useState("");

  const filterItems = useCallback(() => {
    if (!query) return items;
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);

  const filteredItems = useMemo(() => filterItems(), [filterItems]);

  return (
    <div>
      <h1>List Filter Optimization</h1>
      <input
        type="text"
        placeholder="Enter here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items match your filter.</li>
        )}
      </ul>
    </div>
  );
};

export default ListFilterOptimization;
