import styled, { css } from 'styled-components';

// ----- 공통속성 스타일링
const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ----- Frame 스타일
export const FrameWrapper = styled.div`
  width: 600px;
  margin: auto;
  /* background-color: #F5F5F5; */
  /* padding-bottom: 80px; */
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
  z-index: 2;

  /* 하단에 고정 */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
export const MenuList = styled.ul`
  ${flexCenter}
  width: 483px;
  height: 54px;
  margin: auto;
  padding: 0px;

  gap: 41px;
  left: calc(50% - 483px/2 + 0.5px);
  top: calc(50% - 54px/2);
`;

export const Menu = styled.li`
  ${flexCenter}
  flex-direction: column;
  width: 90px;
  height: 54px;
  cursor: pointer;
`;
export const MenuIcon = styled.img`
  width: 100%;
  height: 100%;
`;


// ----- TopBar wrapper 공통스타일
const TopBarStyle = css`
  height: 98px;
  width: 600px;
  background-color: #F5F5F5;
  position: relative;
  z-index: 2; // box-shadow 가려짐 때문에 topbar가 상단에 위치하도록 함
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  /* 상단에 고정 */
  position: fixed;
  top: 0;
`


// TopBar 스타일
export const TopBarWrapper = styled.h2`
  margin: auto;
  ${TopBarStyle};
  left: 0;
  right: 0;
`

// TestTopBar 스타일
export const TestTopBarWrapper = styled.div`
  ${flexCenter};
  ${TopBarStyle};
`;

export const TestTopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;


export const BackIconWrapper = styled.div`
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TestTopBarText = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 26.25px;
  text-align: center;
  color: #5B5B5B;
  margin: 0;
`;

export const LogoImg = styled.img`
  width: 179px;
  height: 43px;
  margin: 37px 0 0 52px;
`

export const PostTestBtn = styled.button`
width: 496px;
height: 62px;
padding: 10px;
border: solid #9180FF 1px;
border-radius: 13px;
background-color: #9180FF;

font-size: 25px;
font-weight: 600;
line-height: 29.83px;
text-align: left;
color: #ffffff;
text-align: center;
cursor: pointer;
`