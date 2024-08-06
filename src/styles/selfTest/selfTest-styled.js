import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f5f5f5;
  padding-top: 60px;
  padding-bottom: 60px;
  margin: 0 auto -100px auto;
  box-sizing: border-box;
`;

export const Header = styled.div`
  margin: auto;
`;

export const Title = styled.div`
  color: #5b5b5b;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 23px;
`;

export const Num = styled.div`
  color: #b3b3b3;
  font-size: 20px;
  font-weight: 500;

  span {
    color: #9180ff;
    font-size: 22px;
  }
`;

export const Question = styled.div`
  width: 320px;
  height: 62px;
  gap: 0px;
  opacity: 0px;
  margin: auto;
  margin-top: 22px;
  font-size: 22px;
  font-weight: 700;
  color: #000000;

  text-align: center;
`;

export const Img = styled.img`
  width: 378px;
  height: 222px;
  margin-top: 34px;
`;

export const AnsContainer = styled.div`
  margin-top: 35px;
`;

export const Answer = styled.div`
  width: 378px;
  height: 51px;
  border-radius: 37px;
  background-color: #ffffff;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 14px;

  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? '#9180FF' : '#ffffff')};
  color: ${(props) => (props.isSelected ? '#ffffff' : '#000000')};
`;

export const NextBtn = styled.div`
  width: 496px;
  height: 76px;
  margin: auto;
  margin-top: 50px;
  padding: 10px 0;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard, sans-serif; /* Pretendard 폰트가 로드되어 있어야 합니다. */
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  background-color: #9180ff;
  color: #ffffff;
`;
