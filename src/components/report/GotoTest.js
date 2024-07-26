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
    LeftIconImage,
    CenterIconImage,
    RightIconImage,
    GotoBtn,
    BottomText,
    TitleText,
    HigLight
} from 'styles/report/GotoTestItem-styled';
import img_check from 'assets/images/report_check.png';
import { CheckImg } from 'styles/report/ReportPage-styled';
import { useNavigate } from 'react-router-dom';



function GotoTest() {
  const navigate = useNavigate();
  return (
    <GotoTestWrapper>
        <TopTitle>
          <TitleText>
            이번주 나의 증상을<br /><CheckImg src={img_check}/><HigLight>테스트</HigLight>로 기록해보세요
          </TitleText>
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

        {/* 증상테스트하기 버튼 */}
        <BottomBtn>
          <GotoBtn onClick={()=>{navigate('/symptomTest')}}>나의 증상 테스트하기</GotoBtn>
          <BottomText>매주 테스트를 통해 리포트를 제공받아요</BottomText>
        </BottomBtn>
    </GotoTestWrapper>
  )
}

export default GotoTest;