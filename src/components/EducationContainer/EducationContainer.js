import uniqid from "uniqid";
import "./EducationContainer.css";

const EducationContainer = ({ education }) => {
  const { logo, name, degree, dates, gpa, achievements, link } = education;
  return (
    <div className="edu-container">
      <div>
        <a href={link} target="_blank">
          <img
            alt="University Icon"
            className="edu-container__img"
            src={logo}
          />
        </a>
      </div>
      <div>
        <h3>{name}</h3>
        <div className="edu-container__degree">{degree}</div>
        <p className="edu-container__description">{dates}</p>
        <p className="edu-container__description">
          <span className="edu-container__gpa">GPA:</span> {gpa}
        </p>

        <p className="edu-container__achievements-header">
          Activities and Achievements:
        </p>
        {achievements.length && (
          <ul className="edu-container__stack">
            {achievements.map((achievement) => (
              <li key={uniqid()} className="">
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EducationContainer;
