import LineChart from 'components/report/LineChart';
import SlideAnimation from 'components/report/slide/SlideAnimation';
import React from 'react';
import {
  GraphWrapper,
  TapWrapper,
  TapBtnWrapper,
  TapBtn1,
  TapBtn2,
} from 'styles/report/ReportPage-styled';
import getGraphHook from 'hooks/report/getGraphHook';
import getReportHook from 'hooks/report/getReportHook';

import MateCard from './MateCard';
import MateReport from './MateReport';


function Tap({ leftTap, setLeftState, setRightState }) {
  
  // 탭 토글 함수
  const toggleTap = () => {
    setLeftState(!leftTap);
    setRightState(!leftTap);
  };

  // graph 데이터 GET HOOK
  const { graphList: myGraphList, errorCode: myErrorCode } = getGraphHook('my');
  const { graphList: mateGraphList, errorCode: mateErrorCode } = getGraphHook('mate');

  // 리포트 요약 조회 HOOK
  const myReportSummary = getReportHook('my')
  const mateReportSummary = getReportHook('mate')


  return (
    <TapWrapper>
      {/* 탭버튼 */}
      {leftTap ? (
      <>
        {/* 내탭 클릭(초기상태) */}
        <TapBtnWrapper>
          <TapBtn1>나의 증상분석</TapBtn1>
          <TapBtn2 onClick={toggleTap}>짝꿍의 증상분석</TapBtn2>
        </TapBtnWrapper>


        {/* TODO : 내 리포트 미존재 시 예외처리코드 */}
        {mateErrorCode===404 ? (
          <MateReport target={'나'}/>
        ) : (
          <>
          {/* 그래프 */}
          <GraphWrapper>
            <LineChart graphList={myGraphList}/>
          </GraphWrapper>

          {/* 슬라이드 */}
          <SlideAnimation reportSummary={myReportSummary} user={'me'}/>
          </>
        )}
      </>
      ) : (
      // 짝꿍탭 클릭 시
      <>
        <TapBtnWrapper>
          <TapBtn2 onClick={toggleTap}>나의 증상분석</TapBtn2>
          <TapBtn1>짝꿍의 증상분석</TapBtn1>
        </TapBtnWrapper>


        {/* TODO : 짝꿍 리포트 미존재 시 예외처리 */}
        <MateReport target={'짝꿍'}/>

        {/*짝꿍 비연동시 예외처리 */}
        {mateErrorCode===404 ? (
          <MateCard />
        ) : 
        (
          <>
          {/* 그래프*/}
          <GraphWrapper>
            <LineChart graphList={mateGraphList}/>
          </GraphWrapper>

          {/* 슬라이드*/}
          <SlideAnimation reportSummary={mateReportSummary} user={'mate'}/>
         </>
        )} 

        
      </>
      )}

    </TapWrapper>
  );
}

export default Tap;
