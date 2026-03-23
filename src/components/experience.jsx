function WorkExperience({ experienceInfo, setExperienceInfo }) {
  const handleInputChange = (i, e) => {
    const values = [...experienceInfo];
    const temp = {...values[i]};
    temp[e.target.name] = e.target.value;
    values[i] = temp;
    setExperienceInfo(values);
  };

  const handleAddInputs = () => {
    setExperienceInfo([
      ...experienceInfo,
      {
        company: "",
        role: "",
        from: "",
        to: "",
      },
    ]);
  };

  const handleRemoveInputs = (i) => {
    const values = [...experienceInfo];
    values.splice(i, 1);
    setExperienceInfo(values);
  };
  return (
    <div className="form-group">
      {experienceInfo.map((data, i) => (
        <div key={i} className="form-group">
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={data.company}
            onChange={(e) => handleInputChange(i, e)}
          />
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={data.role}
            onChange={(e) => handleInputChange(i, e)}
          />
          <label htmlFor="from">From</label>
          <input
            type="date"
            id="from"
            name="from"
            value={data.from}
            onChange={(e) => handleInputChange(i, e)}
          />
          <label htmlFor="to">To</label>
          <input
            type="date"
            id="to"
            name="to"
            value={data.to}
            onChange={(e) => handleInputChange(i, e)}
          />
          {experienceInfo.length > 1 && (
            <button onClick={() => handleRemoveInputs(i)}>Remove</button>
          )}
        </div>
      ))}
      <button onClick={handleAddInputs}>Add</button>
    </div>
  );
}
export default WorkExperience;
