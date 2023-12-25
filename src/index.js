import React from 'react';
import "./App.css";
import './style.css'
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App'
import Home from './components/Home';
import Error404 from './components/Error404';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContectMe from './components/ContectMe';
import Skills from './components/Skills';
// import root from './App';

const App = () => {
  return (
    <div className="App">
    <NavBar />
    <Outlet />
    <Footer />
  </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/projects',
        element:<Projects/>
      },
      {
        path: '/contect-me',
        element: <ContectMe/>
      }, 
      {
        path: '/skills',
        element: <Skills/>
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter} />)
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
