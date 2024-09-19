import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import router from './Router/Router.jsx';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);