import React from 'react'
import styled, { css } from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";

import { HigLight } from 'styles/report/GotoTestItem-styled'
import { ReportContainer, TopWrapper, Title } from 'styles/report/ReportPage-styled';


import { Current, SlideTop, CurrentWeek, CurrentRank, CurrentOverView } from 'styles/report/SlideItem-styled';


function reportDetail() {
  return (

    <ReportContainer>
        <TopWrapper>
            <Title>4주차 홀링<br/><HigLight>리포트</HigLight>가 도착했습니다</Title>
        
        </TopWrapper>

        <div>
            <CurrenttWrapper>
                <Current>
                    <SlideTop>
                        <CurrentWeek>4주차</CurrentWeek>
                    </SlideTop>

                    <SlideBottom>
                        <TextWrapper>
                            <CurrentRank>TOP 1</CurrentRank>
                            <CurrentOverView>안면홍조로 인한 체온변화에 가장 큰 어려움을 겪어요</CurrentOverView>
                        </TextWrapper>
                        <IoIosArrowDown></IoIosArrowDown>
                    </SlideBottom>
                    
                </Current>
            </CurrenttWrapper>


        </div>

    </ReportContainer>
  )
}

export default reportDetail;

// wrapper 공통 스타일링
const wrapperStyle = css`
  width: 498px;
  height: 213px;
  border-radius: 13px;
  margin: 40px 0 0 56px;
`


// 현재 주차 wrapper
const CurrenttWrapper = styled.div`  
  ${wrapperStyle}
  background-color: #9180FF;
  border: 1px solid #FFFFFF;

`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;


`
export const SlideBottom = styled.div`  
  width: 212px;
  height: 60%;
  margin-top: 20px;
  display: fl;
`;