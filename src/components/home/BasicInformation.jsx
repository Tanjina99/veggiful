import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const BasicInformation = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [memberSince, setMemberSince] = useState("");
  const [primaryEmail, setPrimaryEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", {
      name,
      contactNumber,
      gender,
      dob,
      memberSince,
      primaryEmail,
    });
  };

  return (
    <div className="basicinfo">
      <div className="basicinfo-wrapper container">
        <div className="icon-heading-wrapper">
          <span className="file">
            <FaFileAlt />
          </span>
          <div className="space-btw">
            <h1 className="basic-heading">PERSONAL INFORMATION</h1>
            <button className="edit-button">EDIT</button>
          </div>
        </div>
        <div className="form-sec">
          <form onSubmit={handleSubmit}>
            <div className="form-group2">
              <label>Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group2">
              <label>Contact Number:</label>
              <input
                type="tel"
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div className="form-group2">
              <label>Gender:</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group2">
              <label>Date Of Birth:</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="form-group2">
              <label>Member Since:</label>
              <input
                type="text"
                id="memberSince"
                value={memberSince}
                onChange={(e) => setMemberSince(e.target.value)}
              />
            </div>
            <div className="icon-heading-wrapper">
              <span className="email">
                <MdEmail />
              </span>
              <div className="space-btw">
                <h1 className="email-heading">EMAIL ADDRESS</h1>
              </div>
            </div>
            <div className="form-group2">
              <label>Primary Email:</label>
              <input
                type="text"
                id="primaryEmail"
                value={primaryEmail}
                onChange={(e) => setPrimaryEmail(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
