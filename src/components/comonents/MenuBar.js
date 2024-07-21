import { useNavigate } from 'react-router-dom';
import { MenuWrapper, MenuList, Menu, MenuIcon } from 'styles/ComonItem-styled';
import img_actCalender from 'assets/images/calender_activate.png';
import img_disCalender from 'assets/images/calender_disabled.png';
import img_actHome from 'assets/images/home_activate.png';
import img_disHome from 'assets/images/home_disabled.png';
import img_actReport from 'assets/images/report_activate.png';
import img_disReport from 'assets/images/report_disabled.png';
import img_actMy from 'assets/images/my_activate.png';
import img_disMy from 'assets/images/my_disabled.png';


function MenuBar() {
  const navigate = useNavigate();

  return (
    // TODO: navigate 이동으로 수정
    <>
      <MenuWrapper>
        <MenuList>
          <Menu onClick={() => navigate('/')}>
            <MenuIcon src={img_disHome}/>
          </Menu>
          <Menu onClick={() => navigate('/report')}>
            <MenuIcon src={img_disReport}/>
          </Menu>
          <Menu onClick={() => navigate('/calendar')}>
            <MenuIcon src={img_disCalender}/>
          </Menu>
          <Menu onClick={() => navigate('/my')}>
            <MenuIcon src={img_disMy}/>
          </Menu>
        </MenuList>
      </MenuWrapper>
    </>
  );
}


export default MenuBar;
