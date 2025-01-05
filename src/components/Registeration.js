// src/Registration.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './Registration.css';
// import {addBalgopal} from './Api';

const Registration = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    standard: "",
    joining_year: "",
    birth_date: "",
    gender: "Male",
    mandir_sector: "Sector 10",
    mother_mobile: "",
    father_mobile: "",
    address: "",
    ref_type: "",
    created_date: new Date().toISOString().split("T")[0],
    modified_date: new Date().toISOString().split("T")[0],
    isActive: true,
  });
  const Navigate = useNavigate();
  //const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your submit logic here...

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("User registered successfully!");
    } else {
      alert("Error registering user.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h1>Balgopal Registration Form</h1>
      <div className="form-container">
        <div className="form-section">
          {[
            "first_name",
            "middle_name",
            "last_name",
            "standard",
            "joining_year",
            "birth_date",
          ].map((key) => (
            <div className="form-group" key={key}>
              <label htmlFor={key}>
                {key.replace("_", " ").toUpperCase()}:
              </label>
              <input
                type={key.includes("mobile") ? "tel" : "text"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
        </div>
        <div className="form-section">
          {[
            "gender",
            "mandir_sector",
            "mother_mobile",
            "father_mobile",
            "address",
            "ref_type",
          ].map((key) => (
            <div className="form-group" key={key}>
              <label htmlFor={key}>
                {key.replace("_", " ").toUpperCase()}:
              </label>
              {key === "gender" ? (
                <select
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : key === "mandir_sector" ? (
                <select
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}>
                  <option value="sector_10">Sector 10</option>
                  <option value="sector_05">Sector 05</option>
                  <option value="sector_19">Sector 19</option>
                </select>
              ) : (
                <input
                  type={key.includes("mobile") ? "number" : "text"}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "80%",
          gap: "10px",
          margin: "0 auto",
        }}>
        <button onClick={() => Navigate(-1)}>Back</button>
        <button
          onClick={() =>
            setFormData({
              first_name: "",
              middle_name: "",
              last_name: "",
              standard: "",
              joining_year: "",
              birth_date: "",
              gender: "Male",
              mandir_sector: "Sector 10",
              mother_mobile: "",
              father_mobile: "",
              address: "",
              ref_type: "",
              created_date: new Date().toISOString().split("T")[0],
              modified_date: new Date().toISOString().split("T")[0],
              isActive: true,
            })
          }>
          Reset
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Registration;
