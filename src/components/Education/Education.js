import uniqid from "uniqid";
import { educations } from "../../portfolio";
import "./Education.css";
import EducationContainer from "../EducationContainer/EducationContainer";

const Education = () => {
  if (!educations.length) return null;

  return (
    <section id="education" className="section education">
      <h2 className="section__title">Education</h2>
      <ul className="education__list">
        {educations.map((education) => (
          <li className="education__list-item" key={uniqid()}>
            <EducationContainer key={uniqid()} education={education} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
