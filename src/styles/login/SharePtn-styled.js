import styled from 'styled-components';

// 공통 속성 변수
const BtnStyles = `
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 496px;
  height: 76px;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
  line-height: 29.83px;
  text-align: left;
  border-radius: 13px;
  margin: auto;
`;

export const Header = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.87px;
  text-align: center;
  color: #b9bec9;
  margin-top: 53px;
  margin-bottom: 9px;
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 600;
  line-height: 47.73px;
  text-align: center;

  span {
    color: #9180ff;
  }
`;

export const ShareBtn = styled.div`
  ${BtnStyles}
  color: white;
  background: #9180ff;
  margin-bottom: 25px;
`;

export const CloseBtn = styled.div`
  ${BtnStyles}
  background: #f5f5f5;
  color: #5643d1;
  border: 1px solid #5643d1;
`;

export const Result = styled.div`
  width: 246px;
  height: 158px;
  top: 325px;
  left: 177px;
  margin-left: 177px;
  margin-right: 177px;
  margin-bottom: 78px;
  margin-top: 45px;
  img {
    border-radius: 13px;
    border: 1px;
  }
`;
