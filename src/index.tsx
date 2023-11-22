import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

async function deferRender() {
  const { worker } = await import('./mocks/browser.js');
  return worker.start();
}
deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
