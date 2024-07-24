import styled, { css } from 'styled-components';
import { weekStyle } from './SlideItem-styled';


// ----- 공통속성 스타일링
const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
// wrapper 공통 스타일링
const wrapperStyle = css`
  width: 498px;
  height: 213px;
  border-radius: 13px;
  margin: 40px 0 0 56px;
  padding: 25px 25px 24px 26px;
`

export const CurrentWrapper = styled.div`  
  ${flexCenter}
  ${wrapperStyle}
  background-color: #9180FF;
  border: 1px solid #FFFFFF;
`;
export const PastWrapper = styled.div`  
  ${flexCenter}
  ${wrapperStyle}
  background-color: #DDDDDD;
  border: 1px solid #FFFFFF;
`;


export const CurrentDropDown = styled.div`  
  width: fit-content;
  height: 164px;
  display: flex;
`;
export const PastDropDown = styled.div`  
  width: fit-content;
  height: 164px;
  display: flex;
`;

export const PastRank2 = styled.div`  
  color: #5B5B5B;
  font-weight: 1000;
  font-size: 14px;
`;

export const LeftReport = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomText = styled.div`  
  width: 280px;
  height: 87px;
  margin-top: 48px;
`;


export const CurrentDetailText = styled.div`  
  color: #ffffff;
  font-weight: 700;
  font-size: 22px;
  margin-top: 11px;
`;
export const PastDetailText = styled.div`  
  color: #5B5B5B;
  font-weight: 700;
  font-size: 22px;
  margin-top: 11px;
`;

export const DropDownBtn = styled.div`
  ${flexCenter}
  cursor: pointer;
  margin-left: 40px;
`;


// n주차 text
export const PastWeek = styled.div` 
  ${flexCenter}
  ${weekStyle}
  background-color: #ffffff;
  color: #8A8A8A;
`;