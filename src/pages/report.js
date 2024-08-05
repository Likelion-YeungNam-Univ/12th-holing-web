import { useState, useEffect } from 'react';
import { ReportContainer, TopWrapper, Title } from 'styles/report/ReportPage-styled';
import { HigLight } from 'styles/report/GotoTestItem-styled';
import Tap from 'components/report/Tap';
import GotoTest from 'components/report/GotoTest';
import getReportHook from 'hooks/report/getReportHook';
import calcTestDays from 'hooks/report/calcTestDays'; // import calcTestDays

function Report() {
  const [leftTap, setLeftState] = useState(true);
  const [rightTap, setRightState] = useState(false);
  const [formattedDate, setFormattedDate] = useState(''); 
  const [formattedDate7DaysLater, setFormattedDate7DaysLater] = useState(''); 
  const [formattedDate14DaysLater, setFormattedDate14DaysLater] = useState(''); 
  const [gotest, setGoTest] = useState(false); 
  const [daysForNext, setDaysForNext] = useState(0); 
  const [daysForTest, setDaysForTest] = useState(0);

  // 내 리포트 불러오기 Hook
  const myReportSummary = getReportHook('my');

  // calcTestDays.js Hook 실행
  calcTestDays(
    myReportSummary,
    setFormattedDate,
    setFormattedDate7DaysLater,
    setFormattedDate14DaysLater,
    setGoTest,
    setDaysForNext,
    setDaysForTest
  );

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
      <TopWrapper>
        <Title>
          홀링 리포트로 나의 증상을<br /><HigLight>한눈으로</HigLight> 확인하세요
        </Title>

        <Tap leftTap={leftTap} rightTap={rightTap} setLeftState={setLeftState} setRightState={setRightState}/>
      </TopWrapper>

      <GotoTest lastTest={formattedDate} gotest={gotest ? 'active' : 'inactive'} daysForNext={daysForNext} daysForTest={daysForTest}/>
    </ReportContainer>
  );
}

export default Report;
