import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import GlobalStyles from './styles/GlobalStyles';
import TopBar from "./components/comonents/TopBar";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />  {/* 전역스타일링 */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopBar />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
