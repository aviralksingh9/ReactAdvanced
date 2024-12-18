import React from "react";

const Step3 = ({ formData, prevStep }) => {
  const handleSubmit = () => alert("Submitted Successfully");
  return (
    <div>
      <div>
        <p>{formData.name}</p>
        <p>{formData.password}</p>
        <p>{formData.email}</p>
        <p>{formData.city}</p>
      </div>
      <button onClick={prevStep}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
