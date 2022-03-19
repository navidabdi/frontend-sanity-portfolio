import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Experiences.scss';

const Experiences = () => {
  const [experiencess, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Experiences</h2>

      <div className="app__skills-container">
        <div className="app__skills-exp">
          {experiencess?.map((experience, index) => (
            <motion.div className="app__skills-exp-item" key={index}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.reverse().map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <ul>
                        {work.desc.split('✅').map((des) => (
                          <li className="p-text">{des.trim()}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experiences, 'app__skills'),
  'experiencess',
  'app__whitebg'
);
