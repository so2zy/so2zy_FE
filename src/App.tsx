import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Header } from '@components/common/Header';
import SignUp from 'pages/signUp';
import SignIn from 'pages/signIn';

import { GlobalStyle } from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { Card } from '@components/common/Card';
import PlaceDetail from './pages/placeDetail/components/PlaceDetail';

const Main = React.lazy(() => import('./pages/main'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <div className="App">
          <Suspense fallback={<div>로딩중...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <PageWrap>
                    <Card>
                      <Main />
                    </Card>
                  </PageWrap>
                }
              />
              <Route
                path="/place/:id"
                element={
                  <PageWrap>
                    <Card>
                      <PlaceDetail />
                    </Card>
                  </PageWrap>
                }
              />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const PageWrap = styled.div`
  margin-top: 3.5rem;
`;

export default App;
