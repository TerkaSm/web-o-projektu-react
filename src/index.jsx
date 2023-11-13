import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import './global.scss';
import { HomePage } from './pages/HomePage';
import { LocketPage } from './pages/LocketPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/hedvika',
        element: <LocketPage />,
      },
      {
        path: '/tynka',
        element: <LocketPage />,
      },
      {
        path: '/terka',
        element: <LocketPage />,
      }
    ]
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
