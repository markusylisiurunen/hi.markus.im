import React from 'react'
import {
  Container,
  LanguageContainer,
  Language,
  LanguageLabel,
  Name,
  Keywords,
  Description,
} from './style'
import colors from '../../utils/colors'

import Link from '../Link'

const capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase()

const Project = ({ name, languages, keywords, description, repository }) => (
  <Container>
    <LanguageContainer>
      {languages.map(lang => (
        <Language
          size={lang.size}
          total={languages.reduce((sum, lang2) => sum + lang2.size, 0)}
          color={lang.color}
          key={lang.name}
        >
          <LanguageLabel>{lang.name}</LanguageLabel>
        </Language>
      ))}
    </LanguageContainer>
    <Name>{name}</Name>
    <Keywords>{keywords.join(', ')}</Keywords>
    <Description>{description}</Description>
    <Link
      href={repository.href}
      color={colors[`brand${capitalize(repository.name)}`]}
      css={`
        padding-left: 0;
      `}
      block
    >
      {repository.name}
    </Link>
  </Container>
)

export default Project
