import React from 'react';
import { createRoot } from 'react-dom/client';
import { UserProvider } from './Utils/userContext';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
