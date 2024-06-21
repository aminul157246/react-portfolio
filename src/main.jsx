import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout.jsx';
import Banner from './pages/Banner/Banner.jsx';
import About from './pages/About/About.jsx';
import Project from './pages/Project/Project.jsx';
import Blog from './pages/Blog/Blog.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path : '/',
        element : <Banner/>,
      },
      {
        path : '/about',
        element : <About/>,
      },
      {
        path : '/project',
        element : <Project/>,
      },
      {
        path : '/blog',
        element : <Blog/>,
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
