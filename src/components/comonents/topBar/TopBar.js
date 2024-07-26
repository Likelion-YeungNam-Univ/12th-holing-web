import { useNavigate } from 'react-router-dom';
import {TopBarWrapper, LogoImg} from 'styles/ComonItem-styled';
import img_logo from 'assets/images/logo_holing.png'

function TopBar() {
  const navigate = useNavigate();

  return (
    <>
      <TopBarWrapper>
        <LogoImg onClick={()=>navigate('/')}  src= {img_logo} alt="Logo"></LogoImg>
      </TopBarWrapper>
    </>
  );
}


export default TopBar;