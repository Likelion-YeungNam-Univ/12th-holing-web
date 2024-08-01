import React from 'react'
import { Solution, SolutionNumBlue, SolutionText } from 'styles/report/ReportDropDown-styled'

function CurrentSolution( {id, content} ) {
  return (
    <Solution>
      <SolutionNumBlue>0{id}</SolutionNumBlue>

      <SolutionText>{content}</SolutionText>
    </Solution>
  )
}

export default CurrentSolution;
