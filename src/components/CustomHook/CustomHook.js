import React from "react";
import useFetch from "./useFetch";

const CustomHook = () => {
  const { data, loading, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <>
      <h1>Posts using Custom Hook</h1>
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

export default CustomHook;
