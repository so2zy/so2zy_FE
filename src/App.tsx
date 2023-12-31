import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SearchList from 'pages/searchList';
import RegionList from 'pages/regionList';
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
import { Loading } from '@components/common/Loading';
import { NotFound } from '@components/common/NotFound';
import { Footer } from '@components/common/Footer';
import CartReservation from '@pages/cartReservation';

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
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Card>
                      <Main />
                    </Card>
                    <Footer />
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
                path="/regionList"
                element={
                  <>
                    <Header />
                    <RegionList />
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
                    <Footer />
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
                path="/cartreservation"
                element={
                  <>
                    <Header />
                    <Card>
                      <CartReservation />
                    </Card>
                  </>
                }
              />
              <Route
                path="/cart"
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
                path="/confirm"
                element={
                  <>
                    <Header />
                    <Card>
                      <Confirm />
                    </Card>
                  </>
                }
              />
              <Route path="*" element={<NotFound />} />
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
