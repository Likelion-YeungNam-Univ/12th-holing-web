import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Report from 'pages/report';
import ReportDetail from 'pages/reportDetail';
import GlobalStyles from 'styles/GlobalStyles';
import Home from 'pages/Home';
import Frame from 'components/comonents/frame/Frame';
import MyFullCalendar from 'pages/MyFullCalendar';
import MyPage from 'pages/MyPage';
import AccountInfo from 'pages/AccountInfo';
import SymptomTest from 'pages/symptomTest';
import LoginExe from 'pages/LoginExe';
import TestFrame from 'components/comonents/frame/TestFrame';
import IntroFrame from 'components/comonents/frame/IntroFrame';
import UserInfo from 'pages/UserInfo';
import { CookiesProvider } from 'react-cookie';
import FeSelfTest from 'pages/SelfTest/FeSelfTest';
import SelfTest from 'pages/SelfTest/SelfTest';
import SelfTest2 from 'pages/SelfTest/SelfTest2';
import SelfTest3 from 'pages/SelfTest/SelfTest3';
import SelfTest4 from 'pages/SelfTest/SelfTest4';
import SelfTest5 from 'pages/SelfTest/SelfTest5';
import SelfTest6 from 'pages/SelfTest/SelfTest6';
import SelfTest7 from 'pages/SelfTest/SelfTest7';
import SelfTest8 from 'pages/SelfTest/SelfTest8';
import SelfTest9 from 'pages/SelfTest/SelfTest9';
import SelfTest10 from 'pages/SelfTest/SelfTest10';
import Start from 'pages/Start';
import CodeInput from 'pages/CodeInput';

import Loading from 'pages/Loading';
import ReportFrame from 'components/comonents/frame/ReportFrame';
import StartInfo from 'pages/StartInfo';
import ShareUrlPtn from 'components/login/ShareUrlPtn';

function App() {
  return (
    <CookiesProvider>
      <GlobalStyles /> {/* 전역스타일링 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} /> {/* 시작 화면 */}
          {/* 기본 화면프레임 */}
          <Route path="/" element={<IntroFrame />}>
            <Route path="/feselftest" element={<FeSelfTest />} />
            <Route path="/selftest" element={<SelfTest />} />
            <Route path="/selftest2" element={<SelfTest2 />} />
            <Route path="/selftest3" element={<SelfTest3 />} />
            <Route path="/selftest4" element={<SelfTest4 />} />
            <Route path="/selftest5" element={<SelfTest5 />} />
            <Route path="/selftest6" element={<SelfTest6 />} />
            <Route path="/selftest7" element={<SelfTest7 />} />
            <Route path="/selftest8" element={<SelfTest8 />} />
            <Route path="/selftest9" element={<SelfTest9 />} />
            <Route path="/selftest10" element={<SelfTest10 />} />
            <Route path="/userInfo" element={<UserInfo />} />
            <Route path="/shareptn" element={<ShareUrlPtn />} />
            <Route path="/code-input" element={<CodeInput />} />
            <Route path="/startInfo" element={<StartInfo />} />
          </Route>
          <Route path="/" element={<Frame />}>
            <Route path="/home" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/calendar" element={<MyFullCalendar />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/account-info" element={<AccountInfo />} />
            {/* 로그인 후 넘어가는 페이지 */}
            <Route path="/login" element={<Start />} />
          </Route>
          <Route path="/loading" element={<LoginExe />} />
          {/* 테스트 프레임 */}
          <Route path="/" element={<TestFrame />}>
            <Route path="/symptomTest" element={<SymptomTest />} />
          </Route>
          <Route path="/" element={<ReportFrame />}>
            <Route path="/report/:id" element={<ReportDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
