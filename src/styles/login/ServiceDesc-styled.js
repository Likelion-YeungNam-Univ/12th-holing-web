import styled from 'styled-components';

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 700;
  line-height: 44.8px;
  text-align: left;
  margin-top: 20px;

  span {
    text-decoration: underline;
    color: #9180ff;
    text-decoration-color: #9180ff;
  }
`;

export const Desc = styled.div`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  line-height: 23.8px;
  text-align: left;
  color: #5b5b5b;
  margin-top: 17px;
  margin-bottom: 40px;
`;
export const DescTitle = styled.div`
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 700;
  line-height: 30.8px;
  text-align: left;
  margin-top: 36px;
`;
export const DescContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;
`;
export const ImgContainter = styled.div`
  position: relative;
  display: inline-block;
`;
export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
export const Score = styled.div`
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 500;
  span {
    font-weight: 700;
    text-decoration: underline;
  }
`;
export const Comment = styled.div`
  position: absolute;
  top: 118px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f5f5f5;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  width: 200px;
  /* height: 76px; */
  /* top: 97px;
left: 182px;
gap: 0px;
opacity: 0px; */
`;
export const Btn = styled.div`
  img {
    width: 400px;
    height: auto;
    mar
  }
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const LoginDesc = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.71px;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 25px;
`;
