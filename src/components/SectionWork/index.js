/**
 * @overview Work section component.
 */

import React from 'react';

import Layout from '../Layout';
import Attachment from '../Attachment';
import CardWork from '../CardWork';

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

const SectionWork = () => (
  <Layout.Container>
    <Layout.Row marginTop={32} marginBottom={0}>
      <Layout.Col>
        <h2>Work</h2>
      </Layout.Col>
    </Layout.Row>
    <Layout.Row marginBottom={0}>
      {workData.map((work, i) => (
        <Layout.Col key={work.employer + work.jobTitle}>
          <CardWork
            employer={work.employer}
            jobTitle={work.jobTitle}
            dates={work.dates}
            marginBottom={i === workData.length - 1 ? '0' : '16px'}
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
        </Layout.Col>
      ))}
    </Layout.Row>
  </Layout.Container>
);

export default SectionWork;
