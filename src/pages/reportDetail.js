import DropDownCurrent from 'components/report/DropDownCurrent';
import DropDownPast from 'components/report/DropDownPast';
import React from 'react'

function reportDetail() {
  return (
    <>
      <h2>4주차 홀링<br/>리포트가 도착했습니다</h2>
      <DropDownCurrent/>
      <DropDownPast/>

        
    </>
  )
}

export default reportDetail;