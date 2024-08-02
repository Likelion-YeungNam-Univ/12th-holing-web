import { useState, useEffect } from 'react';
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
import { getUserInfo } from 'apis/my/userInfoGet';


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
  console.log("myReportSummary = ", myReportSummary);

  // 유저 정보 상태
  const [userInfo, setUserInfo] = useState([]); 

  // 내 정보 조회_gender 정보 추출
  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getUserInfo();
      setUserInfo(data); // 유저 정보 상태 업데이트
    };
    fetchUserInfo();
  }, []);

  useEffect(() => {
    console.log("userInfo =", userInfo); // 유저 정보 콘솔 출력
    console.log("userInfo.data.gender =", userInfo.data.gender); // 유저 정보 콘솔 출력
  }, [userInfo]);

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
        {myErrorCode===404 ? (
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
        {/* <MateReport target={'짝꿍'}/> */}

        {/*짝꿍 비연동시 예외처리 */}
        {mateErrorCode===404 ? (
          <MateCard gender={userInfo.data.gender}/>
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
