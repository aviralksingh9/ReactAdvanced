import React, { useEffect, useState } from "react";

const FetchList = function () {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setErrors(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (errors) {
    return <div>Error: {errors.message}</div>;
  }
  return (
    <>
      <h1>Fetched Data List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchList;
