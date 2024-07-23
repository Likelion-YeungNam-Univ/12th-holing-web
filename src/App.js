import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Report from 'pages/report';
import GlobalStyles from 'styles/GlobalStyles';
import Frame from 'components/comonents/Frame';
import MyFullCalendar from 'pages/MyFullCalendar';
import MyPage from 'pages/MyPage';
import AccountInfo from 'pages/AccountInfo';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles /> {/* 전역스타일링 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frame />}>
            {' '}
            {/* 기본 화면프레임 */}
            <Route index element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/calendar" element={<MyFullCalendar />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/account-info" element={<AccountInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
