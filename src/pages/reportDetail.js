import React from 'react'

import DropDownCurrent from 'components/report/DropDownCurrent';
import DropDownPast from 'components/report/DropDownPast';
import { HigLight } from 'styles/report/GotoTestItem-styled';
import { ReportBody, Title } from 'styles/report/ReportPage-styled';


function reportDetail() {
  return (
    <ReportBody>
        <Title>4주차 홀링<br/><HigLight>리포트</HigLight>가 도착했습니다</Title>
        <DropDownCurrent/>
        <DropDownPast/>
    </ReportBody>
  )
}

export default reportDetail;