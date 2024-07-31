import React from 'react'
import TestLayout from 'components/test/TestLayout';
import { TestBody } from 'styles/test/SymptomTestPage-styled'

function symptomTest() {
  return (
    <TestBody> 
      {/* 테두리 layout_ 증상별 */}
      <TestLayout/>
    </TestBody>
  )
}

export default symptomTest;

