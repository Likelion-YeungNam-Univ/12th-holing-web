import styled from 'styled-components';
import img_logo from '../../assets/images/logo_holing.png'

function TopBar() {
  return (
    <>
      <BarWrapper>
        <LogoImg src= {img_logo} alt="Logo"></LogoImg>
      </BarWrapper>
    </>
  );
}

const BarWrapper = styled.h2`
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
`;

const LogoImg = styled.img`
  width: 179px;
  height: 43px;
  margin: 37px 0 0 52px;
`

export default TopBar;