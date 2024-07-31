import { Outlet } from 'react-router-dom';
import { FrameWrapper } from 'styles/ComonItem-styled';
import MenuBar from '../menuBar/MenuBar';
import TopBar from '../topBar/TopBar';

// 기본적인 화면 구성 컴포넌트
function Frame() {
  return (
    <FrameWrapper>
      <TopBar /> {/* 상단바 */}
      <Outlet /> {/* 중첩라우팅 */}
      <MenuBar /> {/* 하단메뉴바 */}
    </FrameWrapper>
  );
}

export default Frame;
