import {TopBarWrapper, LogoImg} from 'styles/report/ComonItem-styled';
import img_logo from 'assets/images/logo_holing.png'

function TopBar() {
  return (
    <>
      <TopBarWrapper>
        <LogoImg src= {img_logo} alt="Logo"></LogoImg>
      </TopBarWrapper>
    </>
  );
}


export default TopBar;