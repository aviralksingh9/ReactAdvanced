import React from "react";

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter the name"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Enter the password"
        onChange={handleChange}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
