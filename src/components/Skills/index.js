import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Item, Title, Skill, SkillName, SkillLevel, Explainer } from './style'

const SKILL_LEVELS = ['Familiar', 'Comfortable', 'Pro']

const Skills = () => (
  <StaticQuery
    query={graphql`
      query SkillsQuery {
        allSkillsJson {
          edges {
            node {
              title
              entries {
                name
                level
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h2>Skills</h2>
        <Container>
          {data.allSkillsJson.edges.map(({ node }) => (
            <Item key={node.title}>
              <Title>{node.title}</Title>
              <div>
                {node.entries.map(skill => (
                  <Skill key={skill.name}>
                    <SkillName level={skill.level}>{skill.name}</SkillName>
                    <SkillLevel>{SKILL_LEVELS[skill.level - 1]}</SkillLevel>
                  </Skill>
                ))}
              </div>
            </Item>
          ))}
        </Container>
        <Explainer>
          Please note that some of the skills are darker than the others. This
          indicates how comfortable I am with that particular skill.
        </Explainer>
      </div>
    )}
  />
)

export default Skills
