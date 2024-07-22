import { useState } from 'react';
import { ReportContainer, TopWrapper, Title } from 'styles/report/ReportPage-styled';
import { HigLight } from 'styles/report/GotoTestItem-styled';
import Tap from 'components/report/Tap';
import GotoTest from 'components/report/GotoTest';


function Report() {

  // 탭 상태 관리
  const [leftTap, setLeftState] = useState(true);
  const [rightTap, setRightState] = useState(false);

  return (
    <ReportContainer>
      {/* 상단 리포트 컴포넌트 */}
      <TopWrapper>
        {/* TODO : 데이터는 추후 props로 구현 예정 - 임시로 text입력 상태*/}
        <Title>
          홀링 리포트로 나의 증상을<br /><HigLight>한눈으로</HigLight> 확인하세요
        </Title>

        {/* 탭 컴포넌트 */}
        <Tap leftTap={leftTap} rightTap={rightTap} setLeftState={setLeftState} setRightState={setRightState}/>
      </TopWrapper>


      {/* 하단 테스트 컴포넌트 */}
      {/* TODO: props로 data 전달 예정 */}
      <GotoTest />
      
    </ReportContainer>
  );
}

export default Report;
