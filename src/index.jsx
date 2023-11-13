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
        path: '/hedvika',
        element: <LocketPage key={id} imgPerson={imgPerson} namePerson={namePerson} gitHubLink={gitHubLink} textPerson={textPerson} nameAnimal={nameAnimal} textAnimal={textAnimal} altAnimal={altAnimal} imgAnimal={imgAnimal} />,
      },
      {
        path: '/tynka',
        element: <LocketPage key={id} imgPerson={imgPerson} namePerson={namePerson} gitHubLink={gitHubLink} textPerson={textPerson} nameAnimal={nameAnimal} textAnimal={textAnimal} altAnimal={altAnimal} imgAnimal={imgAnimal}/>,
      },
      {
        path: '/terka',
        element: <LocketPage key={id} imgPerson={imgPerson} namePerson={namePerson} gitHubLink={gitHubLink} textPerson={textPerson} nameAnimal={nameAnimal} textAnimal={textAnimal} altAnimal={altAnimal} imgAnimal={imgAnimal}/>,
      }
    ]
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
