import React, { Suspense } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import { GlobalStyle } from './styles/globalStyles'

const Main = React.lazy(() => import('./pages/main'));

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <div className="App">
          <Suspense fallback={<div>로딩중...</div>}>
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
