import React from 'react'
import { Container, Employer, JobTitle, Dates, Description } from './style'

const Work = ({
  employer,
  jobTitle,
  startDate,
  endDate,
  description,
  attachments,
}) => (
  <Container>
    <Employer>{employer}</Employer>
    <JobTitle>{jobTitle}</JobTitle>
    <Dates>{`${startDate} - ${endDate}`}</Dates>
    <div>
      {description.map(section => (
        <Description key={section}>{section}</Description>
      ))}
    </div>
    {/* {Array.isArray(attachments) && attachments.length && (
      <div
        css={`
          padding-top: 24px;
        `}
      >
        {attachments.map(attachment => (
          <Attachment {...attachment} key={attachment.name} />
        ))}
      </div>
    )} */}
  </Container>
)

export default Work
