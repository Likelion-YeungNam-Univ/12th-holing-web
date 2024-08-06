import { useLocation, useNavigate } from 'react-router-dom';
import { MenuWrapper, MenuList, Menu, MenuIcon } from 'styles/ComonItem-styled';
import img_actCalender from 'assets/images/calender_activate.png';
import img_inactCalender from 'assets/images/calender_disabled.png';
import img_actHome from 'assets/images/home_activate2.png';
import img_inactHome from 'assets/images/home_disabled.png';
import img_actReport from 'assets/images/report_activate.png';
import img_inactReport from 'assets/images/report_disabled.png';
import img_actMy from 'assets/images/my_activate.png';
import img_inactMy from 'assets/images/my_disabled.png';


function MenuBar() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재위치 가져오기

  // 페이지 위치 확인 & 아이콘 반환 함수
  const getMenuIcon = (path, activeIcon, inactiveIcon) => {
    return location.pathname === path ? activeIcon : inactiveIcon
  }

  return (
    // 현재 페이지에 따른 아이콘 변경
    <MenuWrapper>
      <MenuList>
        <Menu onClick={() => navigate('/home')}>
          <MenuIcon src={ getMenuIcon('/home', img_actHome, img_inactHome) }/>
        </Menu>
        <Menu onClick={() => navigate('/report')}>
          <MenuIcon src={ getMenuIcon('/report', img_actReport, img_inactReport) }/>
        </Menu>
        <Menu onClick={() => navigate('/calendar')}>
          <MenuIcon src={ getMenuIcon('/calendar', img_actCalender, img_inactCalender) }/>
        </Menu>
        <Menu onClick={() => navigate('/my')}>
          <MenuIcon src={ getMenuIcon('/my', img_actMy, img_inactMy) }/>
        </Menu>
      </MenuList>
    </MenuWrapper>
  );
}


export default MenuBar;
