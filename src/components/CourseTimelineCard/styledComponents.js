// Style your elements here
import styled from 'styled-components'

export const CourseTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #171f46;
  flex-wrap: wrap;
  width: 100%;
`

export const CourseTitle = styled.h1`
  font-size: 24px;
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto';
`

export const CourseDurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const CourseDuration = styled.p`
  font-weight: bold;
  margin-left: 3px;
`
export const CourseDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #1e293b;
  margin: 0px;
`

export const CourseTagsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-left: 0px;
  list-style-type: none;
  width: 100%;
`
export const TagItem = styled.p`
  background-color: #d9dbd3;
  color: #1e293b;
  font-weight: bold;
  border-radius: 4px;
  padding: 6px;
  margin-right: 8px;
  margin-bottom: 8px;
`
