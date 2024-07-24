import React from 'react'

import img_check from 'assets/images/report_check.png';
import DropDownCurrent from 'components/report/dropdown/DropDownCurrent';
import DropDownPast from 'components/report/dropdown/DropDownPast';
import { HigLight } from 'styles/report/GotoTestItem-styled';
import { ReportBody, Title, CheckImg } from 'styles/report/ReportPage-styled';


function reportDetail() {
  return (
    <ReportBody>
        <Title>
            4주차 홀링<br/><CheckImg src={img_check}/><HigLight>리포트</HigLight>가 도착했습니다
        </Title>
        {/* 현재 리포트 컴포넌트 */}
        <DropDownCurrent/>
        {/* 지난 리포트 컴포넌트 */}
        <DropDownPast/>
    </ReportBody>
  )
}

export default reportDetail;