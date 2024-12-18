import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Something went wrong while fetching the posts");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <h1>Posts</h1>
      {loading && <div>Loading...</div>}
      {errors && <div>Error: {errors}</div>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchDataEffect;
