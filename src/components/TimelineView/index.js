// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import {TimelineViewContainer, Title, ProgramTitle} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props
  const itemsList = timelineItemsList.map(eachTimelineItem => ({
    title: eachTimelineItem.title,
  }))
  return (
    <TimelineViewContainer>
      <Title>
        MY JOURNEY OF <ProgramTitle>CCBP 4.O</ProgramTitle>
      </Title>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        theme={{primary: '#0967d2', secondary: '#ffffff'}}
        items={itemsList}
      >
        {timelineItemsList.map(eachTimelineItem => {
          const {categoryId, id} = eachTimelineItem
          if (categoryId === 'COURSE') {
            return (
              <CourseTimelineCard
                key={id}
                courseTimelineItem={eachTimelineItem}
              />
            )
          }
          return (
            <ProjectTimelineCard
              key={id}
              projectTimelineItem={eachTimelineItem}
            />
          )
        })}
      </Chrono>
    </TimelineViewContainer>
  )
}

export default TimelineView
