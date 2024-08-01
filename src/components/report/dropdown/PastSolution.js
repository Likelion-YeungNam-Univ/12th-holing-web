import React from 'react'
import { Solution, SolutionNumGray, SolutionText } from 'styles/report/ReportDropDown-styled'


function PastSolution({id, content}) {
  return (
    <Solution>
      <SolutionNumGray>0{id}</SolutionNumGray>

      <SolutionText>{content}</SolutionText>
    </Solution>
  )
}

export default PastSolution;
