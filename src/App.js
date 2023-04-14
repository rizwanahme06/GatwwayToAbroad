import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements,Routes, RouterProvider } from "react-router-dom";
import France from './pages/France'
import UK from './pages/UK'
import USA from './pages/USA'
import Canada from './pages/Canada'
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route
            path="UK"
            element={
              <React.Suspense fallback={<>...</>}>
                <UK />
              </React.Suspense>
            }
          />
          <Route
            path="USA/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <USA />
              </React.Suspense>
            }
          />
           <Route
            path="Canada/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <Canada />
              </React.Suspense>
            }
          />
            <Route
            path="France/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <France />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </>
);
}

export default App