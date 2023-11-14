import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import './global.scss';
import { HomePage } from './pages/HomePage';
import { LocketPage } from './pages/LocketPage';
import { ErrorPage } from './pages/ErrorPage';
import { LOCKETS } from './lockets';

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
        path: '/:profileId',
        element: <LocketPage />,
      },
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
