import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 164px;
  height: 164px;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수직 정렬 */
  align-items: center; /* 수평 정렬 */
  text-align: center;
`;

export const OverlayTotal = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;

  text-align: center;
  color: #5643d1;
`;

export const OverlayScore = styled.div`
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 600;
  line-height: 47.73px;
  text-align: center;
  color: #5643d1;
`;
