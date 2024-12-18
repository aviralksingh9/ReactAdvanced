import React from "react";

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="Enter the email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        placeholder="Enter the city"
        onChange={handleChange}
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
