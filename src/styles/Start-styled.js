import styled from 'styled-components';
import background from 'assets/images/background.svg';

export const Wrapper = styled.div`
  margin: auto;
  background-color: #f5f5f5;
  background-image: url(${background}); // 배경 이미지 설정
  background-size: 600px 998px; // 배경 이미지 크기 설정
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`; // 배경 이미지가 반복되지 않도록 설정
/* background-position: 1098px 2706px; // 배경 이미지 위치 설정 */
/* gap: 0px;
  opacity: 0;
  width: 100%;
  height: 100vh;  */

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 48px;
  font-weight: 700;
  line-height: 67.2px;
  text-align: center;
  margin-top: 10px;
`;
export const Desc = styled.div`
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: center;
  color: #9180ff;
`;

export const Logo = styled.img`
  margin-top: 121px;
  width: 258px;
  height: 285.16px;
`;

export const Bottom = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.87px;
  text-align: center;
  color: #5b5b5b;
  margin: 25.79px;
`;

export const Btn = styled.div`
  width: 496px;
  height: 76px;
  margin-top: 121px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9180ff;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
  line-height: 29.83px;
  text-align: center;
`;
