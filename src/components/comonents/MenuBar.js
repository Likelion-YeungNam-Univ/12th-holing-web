import {MenuWrapper, MenuList, Menu} from '../../styles/report/ComonItem-styled';

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


export default MenuBar;
