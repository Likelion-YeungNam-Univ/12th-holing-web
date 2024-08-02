import { useState, useEffect } from 'react';
import { ReportContainer, TopWrapper, Title } from 'styles/report/ReportPage-styled';
import { HigLight } from 'styles/report/GotoTestItem-styled';
import Tap from 'components/report/Tap';
import GotoTest from 'components/report/GotoTest';
import getReportHook from 'hooks/report/getReportHook';


function Report() {

  // 탭 상태 관리
  const [leftTap, setLeftState] = useState(true);
  const [rightTap, setRightState] = useState(false);
  const [formattedDate, setFormattedDate] = useState(''); // 마지막 테스트 날짜 관리
  const [formattedDate7DaysLater, setFormattedDate7DaysLater] = useState(''); // 마지막으로부터 7일후 날짜
  const [formattedDate14DaysLater, setFormattedDate14DaysLater] = useState('');// 14일후 날짜
  const [gotest, setGoTest] = useState(false); // 현재 테스트 활성화 여부 관리
  const [daysForNext, setDaysForNext] = useState(0); // 날짜 차이 일수 관리
  const [daysForTest, setDaysForTest] = useState(0);

  // 리포트 요약 조회 HOOK
  const myReportSummary = getReportHook('my');

  useEffect(() => {
    if (myReportSummary.length !== 0) {
      // 테스트 년월일 값 형태로 변환
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear().toString().slice(2); // 마지막 두 자리
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 두 자리 형식
        const day = date.getDate().toString().padStart(2, '0'); // 두 자리 형식
        return `${year}${month}${day}`;
      };

      const firstCreatedAt = myReportSummary[0].createdAt; // 가장 최근 테스트 일자
      const date = new Date(firstCreatedAt); // 상태 업데이트
      console.log("firstCreatedAt=",firstCreatedAt)
      // 포맷된 날짜 값 설정
      setFormattedDate(formatDate(firstCreatedAt));



      // 7일 후 날짜 계산
      const date7DaysLater = new Date(date);
      date7DaysLater.setDate(date7DaysLater.getDate() + 7);
      setFormattedDate7DaysLater(formatDate(date7DaysLater));

      // 14일 후 날짜 계산
      const date14DaysLater = new Date(date);
      date14DaysLater.setDate(date14DaysLater.getDate() + 14);
      setFormattedDate14DaysLater(formatDate(date14DaysLater));

      // 현재 날짜 계산
      const today = new Date();
      // gotest 설정
      setGoTest(today >= date7DaysLater);

      // 날짜 차이 계산 (일수)
      const diffTime = date14DaysLater - date7DaysLater;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 7;
      setDaysForNext(diffDays);
      
      // 첫 번째 날짜와 7일 후 날짜 사이의 일수 계산
      const firstDate = new Date(firstCreatedAt);
      const diffTimeFromFirstTo7DaysLater = date7DaysLater - firstDate;
      const diffDaysFromFirstTo7DaysLater = Math.ceil(diffTimeFromFirstTo7DaysLater / (1000 * 60 * 60 * 24));
      setDaysForTest(diffDaysFromFirstTo7DaysLater);
    }
  }, [myReportSummary]);



  // 상태 업데이트 후 콘솔 로그
  useEffect(() => {
    console.log("formattedDate=", formattedDate);
    console.log("formattedDate7DaysLater=", formattedDate7DaysLater);
    console.log("formattedDate14DaysLater=", formattedDate14DaysLater);
    console.log("gotest=", gotest);
    console.log("daysForNext=", daysForNext);
    console.log("daysForTest=", daysForTest);
  }, [formattedDate, formattedDate7DaysLater, formattedDate14DaysLater, gotest, daysForNext, daysForTest]);



  return (
    <ReportContainer>
      {/* 상단 리포트 컴포넌트 */}
      <TopWrapper>
        <Title>
          홀링 리포트로 나의 증상을<br /><HigLight>한눈으로</HigLight> 확인하세요
        </Title>

        {/* 탭 컴포넌트 */}
        <Tap leftTap={leftTap} rightTap={rightTap} setLeftState={setLeftState} setRightState={setRightState}/>
      </TopWrapper>


      {/* 하단 테스트 컴포넌트 */}
      <GotoTest lastTest={formattedDate} gotest={gotest} daysForNext={daysForNext} daysForTest={daysForTest}/>
    </ReportContainer>
  );
}

export default Report;
