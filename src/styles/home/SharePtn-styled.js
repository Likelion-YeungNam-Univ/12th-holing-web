import styled from 'styled-components';

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
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  margin: auto;
  width: 496px;
  height: 76px;
  color: white;
  background: #9180ff;
  border-radius: 13px;
  align-self: stretch;

  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
  line-height: 29.83px;
  text-align: left;
  margin-bottom: 25px;
`;
export const CloseBtn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 496px;
  height: 76px;

  background: #f5f5f5;
  color: #5643d1;
  border: 1px solid #5643d1;
  border-radius: 13px;
  margin: auto;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
  line-height: 29.83px;
  text-align: left;
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
