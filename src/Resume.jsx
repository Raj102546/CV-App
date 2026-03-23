function Resume({ generalInfo, educationInfo, experienceInfo }) {
  return (
    <div className="resume">
      {/* HEADER */}
      <div className="resume-header">
        <h1>{generalInfo.fullName}</h1>
        <div className="resume-contact">
          <span>{generalInfo.email}</span>
          <span>{generalInfo.phone}</span>
          <span>{generalInfo.dob}</span>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="resume-section">
        <h2>Education</h2>
        {educationInfo.map((data, i) => (
          <div key={i} className="resume-row">
            <div>
              <h3>{data.universityName}</h3>
              <p>{data.degree}</p>
            </div>
            <div className="resume-right">
              <p>{data.courseDuration}</p>
              <p>{data.graduationDate}</p>
            </div>
          </div>
        ))}
      </div>

      {/* EXPERIENCE */}
      <div className="resume-section">
        <h2>Experience</h2>
        {experienceInfo.map((data, i) => (
          <div key={i} className="resume-row">
            <div>
              <h3>{data.company}</h3>
              <p>{data.role}</p>
            </div>
            <div className="resume-right">
              <p>{data.from} - {data.to}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;