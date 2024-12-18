import React, { useState } from "react";

const FormValidation = function () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {
      name: "",
      email: "",
      password: "",
    };
    if (!formData.name) {
      errors.name = "Name is required";
      formIsValid = false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      errors.email = "Email is required";
      formIsValid = false;
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      formIsValid = false;
    }
    if (!formData.password) {
      errors.password = "Password is required";
      formIsValid = false;
    } else if (formData.password.length < 8) {
      errors.password = "Password length must be at least 8 characters long";
      formIsValid = false;
    }
    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted Successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <h2>Form with Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormValidation;
