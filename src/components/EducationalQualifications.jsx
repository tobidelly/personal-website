import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { qualifications } from '../constants'; // Import your qualifications data
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const QualificationCard = ({ qualification }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={qualification.date}
    iconStyle={{ background: qualification.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={qualification.icon}
          alt={qualification.institution}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl"
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{qualification.degree}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {qualification.institution}
        </p>
      </div>

      <div className="mt-4">
        <p className="text-white-100 text-[14px] tracking-wider">{qualification.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {qualification.tags.map((tag, index) => (
          <p key={index} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </VerticalTimelineElement>
);

const EducationalQualifications = () => {
  return (
    <>
      {/*<motion.div variants={textVariant()} className="flex-end">
  <div className="mt-3 w-full sm:w-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className={`${styles.sectionSubText} mr-4 mt-2`}>I Learn Everyday</p>
    <h2 className={`${styles.sectionHeadText} mt-2 mr-4`}>Education.</h2>
  </div>
</motion.div>*/}
<motion.div variants={textVariant()} className="flex-end justify-items items-start translate-x-9">
  <div className="mt-3 w-full sm:w-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className={`${styles.sectionSubText} mr-4 mt-2`}>I Learn Everyday</p>
    <h2 className={`${styles.sectionHeadText} mt-2 mr-4`}>Education.</h2>
  </div>
</motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {qualifications.map((qualification, index) => (
            <QualificationCard key={index} qualification={qualification} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(EducationalQualifications, 'education');
