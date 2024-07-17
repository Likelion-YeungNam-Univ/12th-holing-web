import styled, { css } from 'styled-components';

// ----- 공통속성 스타일링
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ----- 현재 주차 리포트 컴포넌트
export const ContentWrapper = styled.div`  
  ${flexCenter}
  width: 263px;
  height: 213px;
  background-color: #9180FF;
  border-radius: 13px;
  margin-left: 20px;
`;
export const Content = styled.div`  
  width: 212px;
  height: 164px;
`;

export const SlideTop = styled.div`  
  display: flex;
  justify-content: space-between;
  width: 212px;
  height: 87px;
`;
export const SlideBottom = styled.div`  
  width: 212px;
  height: 87px;
`;

export const Week = styled.div` 
  ${flexCenter}
  background-color: #ffffff;
  width: 66px;
  height: 29px;
  border-radius: 21px;
  padding: 15px, 4px, 15px;
  color: #9180FF;
  font-size: 15px;
  font-weight: 700;
`;
export const MoreBtn = styled.div`  
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;


export const Rank = styled.div`  
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
`;
export const OverView = styled.div`  
  color: #ffffff;
  font-weight: 700;
  font-size: 22px;
`;


// ----- TODO: 이전 주차 리포트 컴포넌트