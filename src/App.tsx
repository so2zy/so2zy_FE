import React, { Suspense } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { Card } from '@components/common/Card';
import PlaceDetail from './pages/placeDetail/components/PlaceDetail';

const Main = React.lazy(() => import('./pages/main'));

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
                  <Card>
                    <Main />
                  </Card>
                }
              />
              <Route
                path="/place/:id"
                element={
                  <Card>
                    <PlaceDetail />
                  </Card>
                }
              />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
