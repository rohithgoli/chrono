// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import {
  CourseTitleContainer,
  CourseTitle,
  CourseDurationContainer,
  CourseDuration,
  CourseDescription,
  CourseTagsContainer,
  TagItem,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseTimelineItem} = props
  const {courseTitle, description, duration, tagsList} = courseTimelineItem
  return (
    <>
      <CourseTitleContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <CourseDurationContainer>
          <AiFillClockCircle />
          <CourseDuration>{duration}</CourseDuration>
        </CourseDurationContainer>
      </CourseTitleContainer>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagsContainer>
        {tagsList.map(eachTag => (
          <TagItem key={eachTag.id}>{eachTag.name}</TagItem>
        ))}
      </CourseTagsContainer>
    </>
  )
}

export default CourseTimelineCard
