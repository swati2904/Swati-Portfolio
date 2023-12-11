import uniqid from "uniqid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { experiences } from "../../portfolio";
import "./Experiences.css";

const ExperienceContainer = ({ experience }) => {
  const {
    company,
    logo,
    color,
    position,
    dates,
    resposibilities = [],
    description,
    address,
    link,
    skills = [],
  } = experience;
  return (
    <div className="experience-card">
      <div
        className="experience-banner"
        style={{ background: color || "rgb(20, 124, 244)" }}
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{company}</h5>
        </div>
        <a href={link} target="_blank">
          <img
            alt="Company logo"
            className="experience-roundedimg"
            src={logo}
          ></img>
        </a>
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-role">{position}</h5>
        <h5 className="experience-text-date">{dates}</h5>
        {address && (
          <div className="experience__address">
            <LocationOnIcon />
            <span className="">{address}</span>
          </div>
        )}

        {description && (
          <div className="experience__description">{description}</div>
        )}

        {(resposibilities.length || skills.length) && (
          <ul className="experience__stack">
            {resposibilities.map((item) => (
              <li key={uniqid()}>{item}</li>
            ))}
            {skills.length && (
              <li key={uniqid()}>
                <span className="experience-skills">Skills: </span>
                {skills.join(", ")}
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
const Experiences = () => {
  if (!experiences.length) return null;

  return (
    <section id="experiences" className="section experiences">
      <h2 className="section__title">Experiences</h2>
      <div className="experience-cards-div">
        {experiences.map((experience) => (
          <ExperienceContainer experience={experience} key={uniqid()} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
