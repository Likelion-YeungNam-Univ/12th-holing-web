import React from 'react'
import Tests from './Tests';
import { WrapperLayout, TestListWrapper, TestWrapper } from 'styles/test/SymptomTestPage-styled'


function TestLayout() {
  return (
    // 증상별 테두리 layout
    <WrapperLayout>
      {/* 문제 layout */}
      <TestWrapper>
        {/* 문제 list wrapper */}
        <TestListWrapper> 
      
        {/* 문제 */}
        {/* TODO : props 연결예정 */}
        <Tests/>
        <Tests/>
        <Tests/>

        </TestListWrapper>
      </TestWrapper>
  </WrapperLayout>
  )
}
export default TestLayout;
