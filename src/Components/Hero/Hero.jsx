import React from 'react';
import './Hero.css';
import profile0 from '../../assets/profile0.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Resume from '../../assets/Resume.pdf';

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src={profile0} alt='' />
      <h1> <span>Hi, I'm Mehar Zohaib </span>Front-end Developer</h1>
      <p> As a FrontEnd Developer, I build interactive Applications using React.js, Node.js, Tailwind CSS, and Material-UI, focusing on responsive and engaging user experiences.</p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With ME</AnchorLink>
        </div>
        <div className='hero-resume'>
          <a href={Resume} target='_blank' rel='noopener noreferrer'>
            Resume
          </a>
        </div>
      </div>
      <div className='hero-socials'>
        <a href='https://www.linkedin.com/in/mehar-zohaib-712811271/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href='https://github.com/MeharZohaib411' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://wa.me/923124466057' target='_blank' rel='noopener noreferrer'>
    <FontAwesomeIcon icon={faWhatsapp} />
</a>

      </div>
    </div>
  );
}

export default Hero;
