import React from 'react'
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
    GotoBtn,
    BottomText,
    TitleText,
    HigLight
} from 'styles/report/GotoTestItem-styled';
import img_check from 'assets/images/report_check.png';
import { CheckImg } from 'styles/report/ReportPage-styled';
import { useNavigate } from 'react-router-dom';



function GotoTest( {lastTest, gotest, daysForNext, daysForTest} ) {
  const navigate = useNavigate();
  return (
    <GotoTestWrapper>
        <TopTitle>
          <TitleText>
            이번주 나의 증상을<br /><CheckImg src={img_check}/><HigLight>테스트</HigLight>로 기록해보세요
          </TitleText>
        </TopTitle>

        <IconsWrapper>
          <LeftIcon>
            <LeftTop>마지막 테스트</LeftTop>
            <LeftBottom>
              {/* 최근 테스트가 없을때 예외처리 */}
              {lastTest === 0 ? '' : lastTest}
            </LeftBottom>
          </LeftIcon>

          {/* 이번 테스트 날짜가 오늘 날짜보다 지났다면 활성화 */}
          <CenterIcon gotest={gotest}>
            <CenterTop gotest={gotest}>이번 테스트</CenterTop>
            <CenterBottom gotest={gotest}>
              {daysForTest === 0 ? 'D-DAY' : `D-00${daysForTest}`}
            </CenterBottom>
          </CenterIcon>

          <RightIcon>
            <RightTop>다음 테스트</RightTop>
            <RightBottom>
              {/* daysForNext 자리수에 따른 형식 표기법 */}
              {daysForNext < 10 ? `D-00${daysForNext}` : `D-0${daysForNext}`}
            </RightBottom>
          </RightIcon>
        </IconsWrapper>

        {/* 증상테스트하기 버튼 */}
        <BottomBtn>
          {/* TODO : 비활성화하기 */}
          <GotoBtn onClick={()=>{navigate('/symptomTest')}}>나의 증상 테스트하기</GotoBtn>
          <BottomText>매주 테스트를 통해 리포트를 제공받아요</BottomText>
        </BottomBtn>
    </GotoTestWrapper>
  )
}

export default GotoTest;