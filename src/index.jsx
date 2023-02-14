import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import HighWraper from './components/HighWraper';

const HeaderFooterlayout = () => {
  return <>
    
    <HighWraper>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </HighWraper>
    <Footer />
  </>
}

// on initialise le router de l'application
const router = createBrowserRouter([
  {
    element: <HeaderFooterlayout />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: "/",
        element: <App />
    },
    {
      path: "/flat",
      element: 
      <h1>Appartement</h1>
    },
    {
      path: "/about",
      element: <h1>A propos</h1>
    }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // on donne le router comme prop au provider. le parent qui donnera accès à cette prop à tous les enfants.
  <React.StrictMode>
    <RouterProvider router= { router }/>
  </React.StrictMode>
);
