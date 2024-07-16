import { Outlet } from 'react-router-dom';
import MenuBar from './MenuBar';
import TopBar from './TopBar';

// 기본적인 화면 구성 컴포넌트
function Frame() {
    return (
      <div>
        <TopBar />  {/* 상단바 */}
        <Outlet />  {/* 중첩라우팅 */}
        <MenuBar />  {/* 하단메뉴바 */}
      </div>
    );
  }
  
  export default Frame;