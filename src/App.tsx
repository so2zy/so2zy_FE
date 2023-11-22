import React, { Suspense } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { Card } from '@components/common/Card';
import PlaceDetail from './pages/placeDetail/components/PlaceDetail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const Main = React.lazy(() => import('./pages/main'));

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
