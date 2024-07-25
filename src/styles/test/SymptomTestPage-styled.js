import styled, {css} from 'styled-components';


// 공통속성 스타일링
const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const TestBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #F5F5F5;
  height: 100vh;
  margin: auto;
`
export const WrapperLayout = styled.div`
  background-color: #B7ACFF;
  border-radius: 13px;
  width: 496px;
  height: fit-content;
  padding-top: 13px;
  margin: 52px auto 41px ;
`
export const TestListWrapper = styled.div`
  height: fit-content;
  padding-top: 38px;
  width: 496px;
`
export const TestWrapper = styled.div`
  width: 100%;
  height: fit-content;
  ${flexCenter};
  margin: auto;
  background-color: #ffffff;
  border-radius: 0 0 13px 13px;
`


export const Test = styled.div`
  display: flex;
  flex-direction: column;
  width: 399px;
  height: fit-content;
  margin: auto;
  border-bottom: 1px solid #B3B3B3;
  margin-bottom: 48px;
  padding-bottom: 20px; /* 추가된 부분 */
`
export const TestNum = styled.span`
  color: #DDDDDD;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
`
export const TestText = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`
export const RealNum = styled.span`
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  text-align: left;
  color: #5B5B5B;
  margin-right: 4px;
`
export const ChoiceList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 339px;
  height: 104px;
  margin: 15px auto;
  
`
export const Choice = styled.li`
  ${flexCenter};
  flex-direction: column;
  width: 58px;
  height: 104px;
  cursor: pointer;
`
export const ChoiceText = styled.p`
  width: 52px;
  height: 36px;
  font-weight: 700;
  font-size: 15px;
  line-height: 17.9px;
  text-align: center;
  color: #5B5B5B;
  font-family: Pretendard ;
  margin-top: 16px;
`