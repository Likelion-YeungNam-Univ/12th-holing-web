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
import SymptomTest from 'pages/symptomTest';
import TestFrame from 'components/test/TestFrame';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles /> {/* 전역스타일링 */}
      <BrowserRouter>
        <Routes>
          {/* 기본 화면프레임 */}
          <Route path="/" element={<Frame />}>
            {' '}
            <Route index element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/calendar" element={<MyFullCalendar />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/reportDetail" element={<ReportDetail />} />
            <Route path="/account-info" element={<AccountInfo />} />
          </Route>
            {/* 테스트 화면프레임 */}
          <Route path="/" element={<TestFrame />}>
            <Route path="/symptomTest" element={<SymptomTest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
