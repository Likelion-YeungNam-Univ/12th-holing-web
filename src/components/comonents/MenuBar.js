import { useNavigate } from 'react-router-dom';
import {MenuWrapper, MenuList, Menu} from 'styles/ComonItem-styled';

function MenuBar() {
  const navigate = useNavigate();

  return (
    // TODO: navigate 이동으로 수정
    <>
      <MenuWrapper>
        <MenuList>
          <Menu onClick={() => navigate('/')}>홈</Menu>
          <Menu onClick={() => navigate('/report')}>리포트</Menu>
          <Menu onClick={() => navigate('/calendar')}>캘린더</Menu>
          <Menu onClick={() => navigate('/my')}>MY</Menu>
        </MenuList>
      </MenuWrapper>
    </>
  );
}


export default MenuBar;
