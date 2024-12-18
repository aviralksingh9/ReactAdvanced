import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    city: "",
  });
  const [stepNumber, setStepNumber] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const prevStep = () => setStepNumber((prevStep) => prevStep - 1);
  const nextStep = () => setStepNumber((prevStep) => prevStep + 1);

  return (
    <div>
      <h1>Multi Step Registration Form</h1>
      {stepNumber === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}
      {stepNumber === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
      {stepNumber === 3 && (
        <Step3
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
