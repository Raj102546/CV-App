import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/general.jsx";
import EducationalInputs from "./components/education.jsx";
import WorkExperience from "./components/experience.jsx";
import Resume from "./Resume.jsx";

function App() {
  const [educationInfo, setEducationInfo] = useState([
    {
      universityName: "National Institute of Technology, Bhopal",
      degree: "B.Tech in Computer Science",
      courseDuration: "2023 - 2027",
      graduationDate: "May 2027",
    },
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      company: "TechNova Solutions",
      role: "Frontend Developer Intern",
      from: "Jan 2026",
      to: "Mar 2026",
    },
  ]);

  const [generalInfo, setGeneralInfo] = useState({
    fullName: "Aarav Sharma",
    dob: "2004-08-15",
    email: "aarav.sharma.dev@example.com",
    phone: "9876543210",
  });

  const [visible, setVisible] = useState(0);

  return (
    <div className="container">
      <div className="form-container">
        <h2>Personal Information</h2>
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <h2>Educational Information</h2>
        <EducationalInputs
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
        <h2>Work Experience</h2>
        <WorkExperience
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
        />
      </div>
      <div className="resumeBox">
        <Resume
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </div>
    </div>
  );
}

export default App;
