import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 50px;
`;

export const Header = styled.div`
  margin: auto;
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.87px;
  text-align: center;
  color: #5b5b5b;
`;

export const Desc = styled.div`
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 700;
  line-height: 26.25px;
  text-align: center;

  span {
    color: #9180ff;
  }
`;

export const Gender = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

export const ImgContainer = styled.div`
  position: relative;
  margin: 0 10px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 13px;
`;

export const Text = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: ${({ active }) => (active ? '#5643D1' : '#b3b3b3')};
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 700;
  text-align: ${({ align }) => align};
  padding: 20px;
`;

export const NextBtn = styled.div`
  width: 496px;
  height: 76px;
  margin: auto;
  margin-top: 20px;
  padding: 10px 0;
  border-radius: 13px;
  background-color: ${({ enabled }) => (enabled ? '#9180ff' : '#dddddd')};
  color: ${({ enabled }) => (enabled ? '#ffffff' : '#b3b3b3')};
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  cursor: ${({ enabled }) => (enabled ? 'pointer' : 'not-allowed')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
