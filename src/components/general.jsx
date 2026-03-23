import { useState } from "react";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const handleInputChange = (e) => {
    const values = { ...generalInfo };
    values[e.target.name] = e.target.value;
    setGeneralInfo(values);
  };

  return (
    <div className="form-group">
      <label>Full Name</label>
      <input
        name="fullName"
        value={generalInfo.fullName}
        onChange={handleInputChange}
      />
      <label>Date Of Birth</label>
      <input
        type="date"
        name="dob"
        value={generalInfo.dob}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={generalInfo.email}
        onChange={handleInputChange}
      />

      <label>Phone no.</label>
      <input
        type="number"
        name="phone"
        value={generalInfo.phone}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default GeneralInfo;
