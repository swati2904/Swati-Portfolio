import uniqid from "uniqid";
import { recommendations } from "../../portfolio";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Recommendations.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const RecommendationContainer = ({ recommendation }) => {
  const {
    profile,
    name,
    position,
    company,
    link,
    description = "",
    linkedin = "",
  } = recommendation;
  return (
    <div className="rec-container">
      <img
        alt="recommender's profile pic"
        className="rec-container__img"
        src={profile}
      />
      <div className="rec-container__info-wrap">
        <div className="rec-container__desc">"{description}"</div>

        <div className="rec-container__name">
          <a href={linkedin} aria-label="source code" className="linkedin">
            <LinkedInIcon />
          </a>
          {name}
        </div>
        <div className="rec-container__details">
          <span>{position},</span>
          <a href={link} target="_blank" className="link-effect">
            <span className="rec-container__compnay">{company}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  if (!recommendations.length) return null;

  const isDesktopView = !window.matchMedia("(max-width:750px)").matches;

  return (
    <section id="recommendations" className="section recommendations">
      <h2 className="section__title">Recommendations</h2>
      <ul className="reccomendation__list">
        <Carousel
          showArrows={false}
          preventMovementUntilSwipeScrollTolerance={true}
          emulateTouch={isDesktopView ? true : false}
          infiniteLoop={true}
          autoPlay={isDesktopView ? true : false}
          showThumbs={false}
          swipeable={isDesktopView ? true : false}
        >
          {recommendations.map((recommendation) => (
            <div className="reccomendation__list-item" key={uniqid()}>
              <RecommendationContainer
                key={uniqid()}
                recommendation={recommendation}
              />
            </div>
          ))}
        </Carousel>
      </ul>
    </section>
  );
};

export default Education;
