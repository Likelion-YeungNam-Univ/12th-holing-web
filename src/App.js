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
import Callback from 'components/login/Callback';

import TestFrame from 'components/comonents/frame/TestFrame';

import IntroFrame from 'components/comonents/frame/IntroFrame';
import Intro from 'pages/intro';

import { CookiesProvider } from 'react-cookie';

// import Kakaologin from 'pages/Kakaologin';

function App() {
  return (
    <CookiesProvider>
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

              <Route path="/login" element={<Login />} />
              {/*서비스 소개 후 로그인 버튼 있는 페이지*/}

              {/* <Route path="/auth/signIn" element={<Callback />} /> */}
              {/* <Route path="/share-url" element={<ShareUrl />} /> */}
              {/*짝꿍과 공유하기 페이지*/}
              <Route path="/kakaologin" element={<ShareUrl />} />
            </Route>

            {/* 로고 가운데 화면프레임 */}
            <Route path="/" element={<IntroFrame />}>
              <Route path="/intro" element={<Intro />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </CookiesProvider>
  );
}
export default App;
