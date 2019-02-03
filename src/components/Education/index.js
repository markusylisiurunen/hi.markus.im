import React from 'react'
import { Container, School, Degree, Dates, Description } from './style'

const Education = ({
  school,
  degree,
  startDate,
  endDate,
  description,
  attachments,
}) => (
  <Container>
    <School>{school}</School>
    <Degree>{degree}</Degree>
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

export default Education
