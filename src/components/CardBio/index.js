/**
 * @overview Education card component.
 */

import React from 'react';
import styled from './style';

const { Container, Name, Email, Header, SocialLink } = styled;

const EducationCard = ({ name, email, school, employer, socialLinks }) => (
  <Container>
    <Name>{name}</Name>
    <Email href={`mailto:${email}`}>{email}</Email>
    <Header>School</Header>
    <span>{school}</span>
    <Header>Employer</Header>
    <span>{employer}</span>
    <Header>Socials</Header>
    {socialLinks.map(socialLink => (
      <SocialLink href={socialLink.href} key={socialLink.name}>
        {socialLink.name}
      </SocialLink>
    ))}
  </Container>
);

export default EducationCard;
