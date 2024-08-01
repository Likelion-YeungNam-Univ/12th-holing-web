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
import Login from 'pages/Login';
import ShareUrl from 'pages/ShareUrl';

import TestFrame from 'components/comonents/frame/TestFrame';

import IntroFrame from 'components/comonents/frame/IntroFrame';
import Intro from 'pages/intro';

// import Kakaologin from 'pages/Kakaologin';

import UserInfo from 'pages/UserInfo';
import FeSelfTest from 'pages/selfTest/FeSelfTest';
import SelfTest from 'pages/selfTest/SelfTest';
import SelfTest2 from 'pages/selfTest/SelfTest2';
import SelfTest3 from 'pages/selfTest/SelfTest3';
import SelfTest4 from 'pages/selfTest/SelfTest4';
import SelfTest5 from 'pages/selfTest/SelfTest5';
import SelfTest6 from 'pages/selfTest/SelfTest6';
import SelfTest7 from 'pages/selfTest/SelfTest7';
import SelfTest8 from 'pages/selfTest/SelfTest8';
import SelfTest9 from 'pages/selfTest/SelfTest9';
import SelfTest10 from 'pages/selfTest/SelfTest10';
import Start from 'pages/Start';

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
          {/* <React.Fragment> */}
          {/* <GlobalStyles /> {/* 전역스타일링 */}
          {/* <BrowserRouter>
        <Routes>  */}
          <Route path="/start" element={<Start />} />
          {/* 기본 화면프레임 */}
          <Route element={<Frame />}>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/calendar" element={<MyFullCalendar />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/reportDetail" element={<ReportDetail />} />
            <Route path="/account-info" element={<AccountInfo />} />

            <Route path="/userInfo" element={<UserInfo />} />
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
          </Route>

          {/* 테스트 화면프레임 */}
          <Route path="/" element={<TestFrame />}>
            <Route path="/symptomTest" element={<SymptomTest />} />

            <Route path="/login" element={<Login />} />
            {/*서비스 소개 후 로그인 버튼 있는 페이지*/}

            {/*짝꿍과 공유하기 페이지*/}
          </Route>

          {/* 로고 가운데 화면프레임 */}
          <Route path="/" element={<IntroFrame />}>
            <Route path="/kakaologin" element={<ShareUrl />} />
            <Route path="/intro" element={<Intro />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
