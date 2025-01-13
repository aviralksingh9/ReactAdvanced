import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    { id: 1, name: "Avi", age: 30 },
    { id: 2, name: "Ram", age: 28 },
    { id: 3, name: "Joy", age: 25 },
  ]);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState();

  const handleChange = (e) => {
    setSelectedData({ ...selectedData, [e.target.name]: e.target.value });
  };

  const handleEdit = (id) => {
    setSelectedId(id);
    setSelectedData(data.find((item) => item.id === id));
  };
  const handleSave = () => {
    setData(data.map((item) => (item.id === selectedId ? selectedData : item)));
    setSelectedId(null);
  };
  return (
    <>
      <table border="2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {selectedId === item.id ? (
                  <input
                    type="text"
                    name="name"
                    value={selectedData.name}
                    onChange={handleChange}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {selectedId === item.id ? (
                  <input
                    type="number"
                    name="age"
                    value={selectedData.age}
                    onChange={handleChange}
                  />
                ) : (
                  item.age
                )}
              </td>
              <td>
                {selectedId === item.id ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
