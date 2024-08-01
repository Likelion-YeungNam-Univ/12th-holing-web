import React from 'react'
import img_check from 'assets/images/report_check.png';
import DropDownCurrent from 'components/report/dropdown/DropDownCurrent';
import DropDownPast from 'components/report/dropdown/DropDownPast';
import { HigLight } from 'styles/report/GotoTestItem-styled';
import { ReportBody, Title, CheckImg } from 'styles/report/ReportPage-styled';
import getDetailHook from 'hooks/report/getDetailHook';


function reportDetail() {
  // 현재 URL에서 reportId 추출
  const currentUrl = window.location.pathname;
  const parts = currentUrl.split('/');
  const reportId = parts[parts.length - 1]; // 마지막 부분 추출

  const reportDetail = getDetailHook(reportId);
  console.log("reportDetail= ", reportDetail)


  // TODO : 로딩 중 화면으로 교체
  if (!reportDetail) {
    return <div>Loading...</div>;
  }

  // `reportDetail`이 정의되어 있고 `reportList`가 배열인지 확인
  if (!reportDetail.reportList || !Array.isArray(reportDetail.reportList)) {
    return <div>No reports available</div>;
  }


  return (
    <ReportBody>
        <Title>
            {reportDetail.month}월 {reportDetail.weekOfMonth}주차 홀링<br/>
            <CheckImg src={img_check}/><HigLight>리포트</HigLight>가 도착했습니다
        </Title>

        
        {reportDetail.reportList.map((reports,index)=>{
          return(
            <div key={index}>
              {/* 맨처음만 현재 리포트 컴포넌트 */}
              {index==0 
                ? (<DropDownCurrent title={reports.title} solution={reports.solution} week={reportDetail.weekOfMonth}/>) 
                : (<DropDownPast title={reports.title} solution={reports.solution} week={reportDetail.weekOfMonth}/>)}
            </div>
          )
        })}

    </ReportBody>
  )
}

export default reportDetail;