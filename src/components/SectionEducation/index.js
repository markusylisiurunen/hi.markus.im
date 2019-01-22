/**
 * @overview Component for showing the education history.
 */

import React from 'react';
import Styled from './style';

import Attachment from '../Attachment';
import Card from '../Card';

const educationData = [
  {
    school: 'Tampere University of Technology',
    degree: 'Master of Science (Technology)',
    dates: '08/2016 - present',
    description: [
      "I am studying computer science, majoring in Software Engineering and minoring in Machine Learning. However, I'm planning to major in Machine Learning, Data Science and Artificial Intelligence in the Master's programme.",
      'You can find the most recent transcript of my study records below.',
    ],
    attachments: [
      { type: 'pdf', name: 'Study records (Q4 of 2018)', href: '' },
    ],
  },
  {
    school: "Ylöjärvi's upper secondary school",
    degree: 'Undergraduate',
    dates: '08/2013 - 06/2016',
    description: [
      'The subjects I chose for the matriculation examination were (advanced) mathematics, physics, chemistry, English and Finnish.',
      'You can find the school leaving certificate and the matriculation examination results below.',
    ],
    attachments: [
      { type: 'pdf', name: 'School leaving certificate', href: '' },
      { type: 'pdf', name: 'Matriculation examination results', href: '' },
    ],
  },
];

const CardEducation = ({ school, degree, dates, children, ...props }) => (
  <Card border="none" padding="0" {...props}>
    <Styled.School>{school}</Styled.School>
    <Styled.Degree>{degree}</Styled.Degree>
    <Styled.Dates>{dates}</Styled.Dates>
    {children && children}
  </Card>
);

const SectionEducation = () => (
  <Styled.Container>
    <h2>Education</h2>
    {educationData.map((education, i) => (
      <CardEducation
        school={education.school}
        degree={education.degree}
        dates={education.dates}
        marginBottom={i === educationData.length - 1 ? '0px' : '40px'}
        key={education.school + education.degree}
      >
        {education.description.map(description => (
          <p key={description}>{description}</p>
        ))}
        {education.attachments.map(attachment => (
          <Attachment
            type={attachment.type}
            name={attachment.name}
            key={attachment.name}
          />
        ))}
      </CardEducation>
    ))}
  </Styled.Container>
);

export default SectionEducation;
