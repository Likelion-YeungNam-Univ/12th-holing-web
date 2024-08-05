import styled from 'styled-components';

export const Img = styled.img`
  width: 258px;
  height: 285.16px;
  margin: auto;

  position: absolute; /* 배경 위에 위치하도록 설정 */
  width: auto; /* 필요에 따라 조정 */
  height: auto; /* 필요에 따라 조정 */
  z-index: 1; /* Background 위에 위치하도록 설정 */
  opacity: 0;
`;

export const Background = styled.div`
  position: relative; /* 위치 조정 필요 */

  height: 100vh; /* 전체 화면 높이 */
  background-color: rgba(0, 0, 0, 0.6); /* 배경 색상과 투명도 */
  display: flex;
  justify-content: center;
  align-items: center;
`;
