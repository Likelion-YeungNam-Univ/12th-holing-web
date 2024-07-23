import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Report from 'pages/report';
import ReportDetail from 'pages/reportDetail';
import GlobalStyles from 'styles/GlobalStyles';
import Frame from 'components/comonents/Frame';
import MyFullCalendar from 'pages/MyFullCalendar';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles /> {/* 전역스타일링 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frame />}>
            {' '}
            {/* 기본 화면프레임 */}
            <Route path="/report" element={<Report />} />
            <Route path="/reportDetail" element={<ReportDetail />} />
            <Route path="/Calendar" element={<MyFullCalendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
