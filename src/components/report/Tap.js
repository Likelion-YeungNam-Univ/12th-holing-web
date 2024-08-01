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


function Tap({ leftTap, setLeftState, setRightState }) {
  // 탭 토글 함수
  const toggleTap = () => {
    setLeftState(!leftTap);
    setRightState(!leftTap);
  };

  // graph 데이터 GET HOOK
  const myGraphList = getGraphHook('my');
  const mateGraphList = getGraphHook('mate');

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

        
        {/* 그래프 */}
        <GraphWrapper>
          <LineChart graphList={myGraphList}/>
        </GraphWrapper>

        {/* 슬라이드 */}
        <SlideAnimation reportSummary={myReportSummary}/>
      </>
      ) : (
      // 짝꿍탭 클릭 시
      <>
        <TapBtnWrapper>
          <TapBtn2 onClick={toggleTap}>나의 증상분석</TapBtn2>
          <TapBtn1>짝꿍의 증상분석</TapBtn1>
        </TapBtnWrapper>

        {/* 그래프*/}
        <GraphWrapper>
          <LineChart graphList={mateGraphList}/>
        </GraphWrapper>

        {/* 슬라이드*/}
        <SlideAnimation reportSummary={mateReportSummary}/>
      </>
      )}

    </TapWrapper>
  );
}

export default Tap;
