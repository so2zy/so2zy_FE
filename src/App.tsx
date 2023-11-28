import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SearchList from './pages/searchList';
import { Header } from '@components/common/Header';
import SignUp from 'pages/signUp';
import SignIn from 'pages/signIn';
import { GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { Card } from '@components/common/Card';
import { PlaceDetail } from './pages/placeDetail/PlaceDetail.page';
import Modal from 'react-modal';
import Reservation from 'pages/reservation';
import Cart from 'pages/cart';
import Confirm from 'pages/confirm';

const Main = React.lazy(() => import('./pages/main'));
// const SearchList = React.lazy(() => import('./pages/searchList'));
// const Card = React.lazy(() => import('./components/common/Card'));
// const PlaceDetail = React.lazy(() => import('./pages/placeDetail'));
Modal.setAppElement('#root');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <div className="App">
          <Suspense fallback={<div>로딩중...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Card>
                      <Main />
                    </Card>
                  </>
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
              <Route
                path="/place/:id"
                element={
                  <>
                    <Header />
                    <Card>
                      <PlaceDetail />
                    </Card>
                  </>
                }
              />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route
                path="/reservation"
                element={
                  <>
                    <Header />
                    <Card>
                      <Reservation />
                    </Card>
                  </>
                }
              />
              <Route
                path="/cart" //:id도 받아줘야함
                element={
                  <>
                    <Header />
                    <Card>
                      <Cart />
                    </Card>
                  </>
                }
              />
              <Route
                path="/confirm" //:id도 받아줘야함
                element={
                  <>
                    <Header />
                    <Card>
                      <Confirm />
                    </Card>
                  </>
                }
              />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

// const PageWrap = styled.div`
//   margin-top: 3.5rem;
// `;

export default App;
