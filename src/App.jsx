import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import About from './pages/About';
import Service from './pages/Service';
import MainLayout from './layouts/MainLayout';
import Error from './layouts/Error';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Route>
        <Route path="*" element={<Error />} />
      </>
    )
  );

  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App
