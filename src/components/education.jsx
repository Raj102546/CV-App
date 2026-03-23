function EducationalInputs({ educationInfo, setEducationInfo }) {
  const handleInputChange = (i, e) => {
    const values = [...educationInfo];
    const temp = { ...values[i] };
    temp[e.target.name] = e.target.value;
    values[i] = temp;
    setEducationInfo(values);
  };

  const handleAddInputs = () => {
    setEducationInfo([
      ...educationInfo,
      {
        universityName: "",
        degree: "",
        courseDuration: "",
        graduationDate: "",
      },
    ]);
  };

  const handleRemoveInputs = (i) => {
    const values = [...educationInfo];
    values.splice(i, 1);
    setEducationInfo(values);
  };

  return (
    <div className="form-group">
      {educationInfo.map((data, i) => (
        <div key={i} className="form-group">
          <label>Institution</label>
          <input
            name="universityName"
            value={data.universityName}
            onChange={(e) => handleInputChange(i, e)}
          />

          <label>Course</label>
          <input
            name="degree"
            value={data.degree}
            onChange={(e) => handleInputChange(i, e)}
          />

          <label>Duration</label>
          <input
            type="text"
            name="courseDuration"
            value={data.courseDuration}
            onChange={(e) => handleInputChange(i, e)}
          />

          <label>Graduation Date</label>
          <input
          type="date"
            name="graduationDate"
            value={data.graduationDate}
            onChange={(e) => handleInputChange(i, e)}
          />

          {educationInfo.length > 1 && (
            <button onClick={() => handleRemoveInputs(i)}>Remove</button>
          )}
        </div>
      ))}
      <button onClick={handleAddInputs}>Add</button>
    </div>
  );
}
export default EducationalInputs;
