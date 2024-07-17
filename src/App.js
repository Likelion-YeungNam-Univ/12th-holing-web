import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Report from './pages/report';
import GlobalStyles from './styles/GlobalStyles';
import Frame from "./components/comonents/Frame";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />  {/* 전역스타일링 */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Frame />}>  {/* 기본 화면프레임 */}
            <Route path='/report' element={<Report />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
