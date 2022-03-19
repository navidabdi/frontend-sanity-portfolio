import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsGlobe } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a target="_blank" href="https://github.com/navidabdi">
      <BsGithub />
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/nabiabdi/">
      <BsLinkedin />
    </a>
    <a target="_blank" href="https://instagram.com/nabiabdii">
      <BsInstagram />
    </a>
    <a target="_blank" href="https://webkima.com/">
      <BsGlobe />
    </a>
  </div>
);

export default SocialMedia;
