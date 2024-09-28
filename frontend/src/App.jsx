// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import{
  createBrowserRouter,
  Navigate,
  RouterProvider,
}
from "react-router-dom";
import Index from './pages/Index'
import Home from './components/Home'  
import  Templates from './components/Templates'
import Projects from './components/Projects'
import CreateDesign from './components/CreateDesign'
import Main from './pages/Main'
import { token_decode } from "./utils/index";
import Layout from "./pages/Layout";


const userInfo =token_decode(localStorage.getItem('canva_token'))


const router = createBrowserRouter([
  {
    path: "/",
    element: userInfo ? <Layout /> : <Index />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/projects',
        element:<Projects />
      },
      {
        path:'/templates',
        element:<Templates />
      },
    ]
  },
  {
    path:'/design/create',
    element: userInfo ? <CreateDesign /> : <Navigate to="/" />
  },
  {
    path:'/design/:design_id/edit',
    element: userInfo ?  <Main /> : <Navigate to="/" />
  }
]);

function App() {

  return <RouterProvider router={router}/>  
}

export default App
