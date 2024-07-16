import styled, { css } from 'styled-components';

function MenuBar() {
  return (
    <>
      <MenuWrapper>
        <MenuList>
          <Menu><a href="/">홈</a></Menu>
          <Menu><a href="/report">리포트</a></Menu>
          <Menu><a href="/calendar">캘린더</a></Menu>
          <Menu><a href="/my">MY</a></Menu>
        </MenuList>
      </MenuWrapper>
    </>
  );
}

// 공통스타일 지정
const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuWrapper = styled.div`
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

const Menu = styled.ul`
  ${flexCenter}
  width: 90px;
  height: 54px;
`;

const MenuList = styled.li`
  ${flexCenter}
  width: 483px;
  height: 54px;
  margin: auto;
`;

export default MenuBar;
