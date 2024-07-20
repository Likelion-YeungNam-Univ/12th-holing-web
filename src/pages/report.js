import LineChart from 'components/report/LineChart';
import SlideAnimation from 'components/report/SlideAnimation';
import {
  ReportContainer,
  TopWrapper,
  GraphWrapper,
  Title,
  TapWrapper,
  TapBtnWrapper,
  TapBtn1,
  TapBtn2
} from 'styles/report/ReportPage-styled';

import {
  GotoTestWrapper,
  TopTitle,
  IconsWrapper,
  LeftIcon,
  CenterIcon,
  RightIcon,
  LeftTop,
  LeftBottom,
  CenterTop,
  CenterBottom,
  RightTop,
  RightBottom,
  BottomBtn,
  LeftIconImage,
  CenterIconImage,
  RightIconImage
} from 'styles/report/GotoTestPage-styled';


function Report() {
  return (
    <ReportContainer>
      {/* 상단 리포트 컴포넌트 */}
      <TopWrapper>
        {/* TODO : 데이터는 추후 props로 구현 예정 - 임시로 text입력 상태*/}
        <Title>
          홀링 리포트로 나의 증상을
          <br />
          한눈으로 확인하세요
        </Title>

        {/* TODO : 탭 컴포넌트 분리 */}
        <TapWrapper>
          {/* 탭버튼 */}
          <TapBtnWrapper>
            <TapBtn1>나의 증상분석</TapBtn1>
            <TapBtn2>짝꿍의 증상분석</TapBtn2>
          </TapBtnWrapper>
          {/* 그래프*/}
          <GraphWrapper>
            <LineChart />
          </GraphWrapper>

          {/* 슬라이드*/}
          <SlideAnimation />
        </TapWrapper>
      </TopWrapper>

      {/* TODO: 하단 테스트 컴포넌트 분리 */}
      <GotoTestWrapper>
        <TopTitle>
          <h2>
            이번주 나의 증상을<br />테스트로 기록해보세요
          </h2>
        </TopTitle>

        {/* TODO: props로 data 전달 예정 */}
        <IconsWrapper>
          <LeftIcon>
            <LeftIconImage />
            <LeftTop>N주차 테스트</LeftTop>
            <LeftBottom>240608</LeftBottom>
          </LeftIcon>

          <CenterIcon>
            <CenterIconImage />
            <CenterTop>N주차 테스트</CenterTop>
            <CenterBottom>D-DAY</CenterBottom>
          </CenterIcon>

          <RightIcon>
            <RightIconImage />
            <RightTop>N주차 테스트</RightTop>
            <RightBottom>D-007</RightBottom>
          </RightIcon>
        </IconsWrapper>

        <BottomBtn>
          <button>나의 증상 테스트하기</button>
          <p>매주 테스트를 통해 리포트를 제공받아요</p>
        </BottomBtn>
      </GotoTestWrapper>
    </ReportContainer>
  );
}

export default Report;
