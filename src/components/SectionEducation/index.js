/**
 * @overview Education section component.
 */

import React from 'react';
import styled from 'styled-components';

import Layout from '../Layout';
import Attachment from '../Attachment';
import CardEducation from '../CardEducation';

const educationData = [
  {
    school: 'Tampere University of Technology',
    degree: 'Master of Science (Technology)',
    dates: '08/2016 - present',
    description: [
      "I have been studying Software Engineering as my major and Machine Learning as my minor for the bachelor's programme. However, I'm planning to study Machine Learning, Data Science and Artificial Intelligence as my major in the master's programme.",
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

const SectionEducation = () => (
  <Layout.Container>
    <Layout.Row marginTop={32} marginBottom={0}>
      <Layout.Col>
        <h2>Education</h2>
      </Layout.Col>
    </Layout.Row>
    <Layout.Row marginBottom={0}>
      {educationData.map((education, i) => (
        <Layout.Col key={education.school + education.degree}>
          <CardEducation
            school={education.school}
            degree={education.degree}
            dates={education.dates}
            marginBottom={i === educationData.length - 1 ? '0' : '16px'}
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
        </Layout.Col>
      ))}
    </Layout.Row>
  </Layout.Container>
);

export default SectionEducation;
