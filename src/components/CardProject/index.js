/**
 * @overview Project card component.
 */

import React from 'react';
import Styled from './style';

import Card from '../Card';

const { Name, Link, Technologies } = Styled;

const CardProject = ({ name, href, repository, technologies, children }) => (
  <Card border>
    <Name>{name}</Name>
    <Link index={1} href={href}>
      <i className="fa fa-external-link" />
    </Link>
    <Link index={0} href={repository}>
      <i className="fa fa-github" />
    </Link>
    <Technologies>{technologies.join(', ')}</Technologies>
    {children}
  </Card>
);

export default CardProject;
