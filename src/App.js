import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Report from 'pages/report';
import ReportDetail from 'pages/reportDetail';
import GlobalStyles from 'styles/GlobalStyles';
import Home from 'pages/Home';
import Frame from 'components/comonents/Frame';
import MyFullCalendar from 'pages/MyFullCalendar';
import MyPage from 'pages/MyPage';
import AccountInfo from 'pages/AccountInfo';
import UserInfo from './pages/UserInfo';

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
            <Route path="/reportDetail" element={<ReportDetail />} />
            <Route path="/account-info" element={<AccountInfo />} />
            <Route path="/userInfo" element={<UserInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
