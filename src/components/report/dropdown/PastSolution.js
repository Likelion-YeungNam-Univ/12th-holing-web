import React from 'react'
import { Solution, SolutionNumGray, SolutionText } from 'styles/report/ReportDropDown-styled'


function PastSolution() {
  return (
    // TODO : 컴포넌트 분리 및 props 전달
    <Solution>
      <SolutionNumGray>01</SolutionNumGray>

      <SolutionText>
      조용하고 어두운 방에서 규칙적인 수면 스케줄을 유지해요.
      카페인 섭취를 저녁 식사 후에는 자제해보세요.
        카페인은 수면을 방해할 수 있어요.
      </SolutionText>
    </Solution>
  )
}

export default PastSolution;
