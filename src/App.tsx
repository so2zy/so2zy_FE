import React, { Suspense } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SearchList from 'pages/searchList';
import { Header } from '@components/common/Header';
import RegionList from './pages/regionList';
import PlaceDetail from './pages/placeDetail';
import SignUp from 'pages/signUp';
import SignIn from 'pages/signIn';
import Cart from 'pages/cart';
import Confirm from 'pages/confirm';
import Reservation from 'pages/reservation';
// import { GlobalStyle } from './styles/globalStyles'

const Main = React.lazy(() => import('./pages/main'));

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <Header />
        <div className="App">
          <Suspense fallback={<div>로딩중...</div>}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/searchList" element={<SearchList />} />
              <Route path="/regionList" element={<RegionList />} />
              <Route path="/placeDetail" element={<PlaceDetail />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/confirm" element={<Confirm />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
