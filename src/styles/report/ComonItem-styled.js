import styled, { css } from 'styled-components';

// ----- 공통속성 스타일링
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ----- Frame 스타일
export const FrameWrapper = styled.div`
  width: 600px;
  margin: auto;
  background-color: #F5F5F5;
`

// ----- MenuBar 스타일
export const MenuWrapper = styled.div`
  ${flexCenter}
  width: 600px;
  height: 90px;
  background-color: #fbfbfb;
  font-size: 12px;
  color: #b9bec9;
  margin: auto;
  box-shadow: 0px 1px 6.8px 0px rgba(208, 208, 208, 1);
  border-radius: 13px 13px 0 0;

  /* 하단에 고정 */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Menu = styled.ul`
  ${flexCenter}
  width: 90px;
  height: 54px;
`;

export const MenuList = styled.li`
  ${flexCenter}
  width: 483px;
  height: 54px;
  margin: auto;
`;

// ----- TopBar 스타일
export const TopBarWrapper = styled.h2`
  margin: auto;
  height: 98px;
  width: 600px;
  background-color: #F5F5F5;
  position: relative;
  z-index: 2; // box-shaow 가려짐 때문에 topbar가 상단에 위치하도록 함
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  /* 상단에 고정 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

export const LogoImg = styled.img`
  width: 179px;
  height: 43px;
  margin: 37px 0 0 52px;
`