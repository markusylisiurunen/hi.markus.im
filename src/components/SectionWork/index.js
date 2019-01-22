/**
 * @overview Component for showing the work history.
 */

import React from 'react';
import Styled from './style';

import Attachment from '../Attachment';
import Card from '../Card';

const { Container, Employer, JobTitle, Dates } = Styled;

const workData = [
  {
    employer: 'Intopalo Digital Oy',
    jobTitle: 'Software Developer',
    dates: '05/2017 - present',
    description: [
      'I have been part of various customer projects doing front-end, back-end, architecture, devops and more. I have had the opportunity to learn new frameworks and technologies during the time I have been part of the team at Intopalo Digital.',
      'I have also received a certificate of appreciation which is given to just few employees annually. You can find the certificate below.',
    ],
    attachments: [
      { type: 'pdf', name: 'Certificate of appreciation', href: '' },
    ],
  },
];

const CardWork = ({ employer, jobTitle, dates, children, ...props }) => (
  <Card border="none" padding="0" {...props}>
    <Employer>{employer}</Employer>
    <JobTitle>{jobTitle}</JobTitle>
    <Dates>{dates}</Dates>
    {children && children}
  </Card>
);

const SectionWork = () => (
  <Container>
    <h2>Work</h2>
    {workData.map((work, i) => (
      <CardWork
        employer={work.employer}
        jobTitle={work.jobTitle}
        dates={work.dates}
        marginBottom={i === workData.length - 1 ? '0px' : '32px'}
        key={work.employer + work.jobTitle}
      >
        {work.description.map(description => (
          <p key={description}>{description}</p>
        ))}
        {work.attachments.map(attachment => (
          <Attachment
            type={attachment.type}
            name={attachment.name}
            key={attachment.name}
          />
        ))}
      </CardWork>
    ))}
  </Container>
);

export default SectionWork;
