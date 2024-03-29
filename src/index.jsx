import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/Home/Home.css';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
import Flat from './pages/Flat/Flat'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import HighWraper from './layout/HighWraper'

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

// on initialise le router de l'application avec les différentes routes vers les différentes pages
const router = createBrowserRouter([
  {
    element: <HeaderFooterlayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
    },
    {
      path: "/flat/:id",
      element: <Flat />
    },
    {
      path: "/about",
      element: <About />
    }
    ]
  },
])

// le render du DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // on donne le router comme prop au provider. le parent qui donnera accès à cette prop à tous les enfants.
  <React.StrictMode>
    <RouterProvider router= { router }/>
  </React.StrictMode>
);
