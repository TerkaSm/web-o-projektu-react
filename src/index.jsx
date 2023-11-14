import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import './global.scss';
import { HomePage } from './pages/HomePage';
import { LocketPage } from './pages/LocketPage';
import { ErrorPage } from './pages/ErrorPage';
import { lockets } from './lockets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/person/hedvika',
        element: <LocketPage/:id />,
      },
      {
        path: '/person/tynka',
        element: <LocketPage key={2}/>,
      },
      {
        path: '/person/terka',
        element: <LocketPage key={3}/>,
      }
    ]
  },
]);


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/',
//         element: <HomePage />
//       },
//       ...lockets.map((locket) => ({
//         path: `/${locket.id}`,
//         element: <LocketPage key={locket.id} {...locket} />,
//       }))
//     ]
//   },
// ]);


createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
