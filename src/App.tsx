import React, { Suspense } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Card } from '@components/common/Card';
import SearchList from './pages/searchList';
import { Header } from '@components/common/Header';

// import { GlobalStyle } from './styles/globalStyles'

const Main = React.lazy(() => import('./pages/main'));
// const SearchList = React.lazy(() => import('./pages/searchList'));
// const Card = React.lazy(() => import('./components/common/Card'));

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <div className="App">
          <Suspense fallback={<div>로딩중...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <Card>
                    <Main />
                  </Card>
                }
              />
              <Route
                path="/searchList"
                element={
                  <>
                    <Header />
                    <SearchList />
                  </>
                }
              />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
