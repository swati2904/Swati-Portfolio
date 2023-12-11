import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, role, description, resume, social, image, gender, address } =
    about;

  return (
    <div className='about center'>
      {image && (
        <div className='about__picture'>
          <img className='about__img' alt='My profile picture' src={image} />
        </div>
      )}
      {name && (
        <h1 className='about__me'>
          Hi, I am <span className='about__name'>{name}</span>
          <span className='about__gender'>{gender}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      {address && (
        <div className='about__address'>
          <LocationOnIcon />
          <span className=''>{address}</span>
        </div>
      )}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={`/resume`} target='_blank'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
              >
                <LinkedInIcon />
              </a>
            )}
            {social.youtube && (
              <a
                href={social.youtube}
                aria-label='youtube'
                className='link link--icon'
                target='_blank'
              >
                <YouTubeIcon />
              </a>
            )}
            {social.instagram && (
              <a
                href={social.instagram}
                aria-label='instagram'
                className='link link--icon'
                target='_blank'
              >
                <InstagramIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
