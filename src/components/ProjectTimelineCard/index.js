// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectImage,
  ProjectTitleContainer,
  ProjectTitle,
  ProjectDurationContainer,
  ProjectDuration,
  ProjectDescription,
  ProjectLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectTimelineItem} = props
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = projectTimelineItem
  return (
    <>
      <ProjectImage src={imageUrl} alt="project" />
      <ProjectTitleContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <ProjectDurationContainer>
          <AiFillCalendar />
          <ProjectDuration>{duration}</ProjectDuration>
        </ProjectDurationContainer>
      </ProjectTitleContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLink href={projectUrl}>Visit</ProjectLink>
    </>
  )
}

export default ProjectTimelineCard
