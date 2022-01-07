// Style your elements here
import styled from 'styled-components'

export const ProjectImage = styled.img`
  width: 100%;
`

export const ProjectTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #171f46;
  flex-wrap: wrap;
  width: 100%;
`

export const ProjectTitle = styled.h1`
  font-size: 24px;
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto';
`

export const ProjectDurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const ProjectDuration = styled.p`
  font-weight: bold;
  margin-left: 3px;
`
export const ProjectDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #1e293b;
  margin: 0px;
`
export const ProjectLink = styled.a`
  color: #0967d2;
  margin-right: auto;
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
  text-decoration: none;
`
