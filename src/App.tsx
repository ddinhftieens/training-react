import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import ReactHooks from './ReactHooks';
import { Navigate, useRoutes } from 'react-router-dom';
import Error500 from './Error500';
import NotFound from './NotFound';
import { indexRouter } from './router/indexRouter';

function App() {

  let router = useRoutes([
    { path: '/', element: <Navigate to="/home" replace /> },
    indexRouter,
    { path: 'err-network', element: <Error500 /> },
    { path: '*', element: <NotFound /> },
  ]);

  return (
    // <Test1 />
    // <Test2 />
    // <Test3 />
    // <ReactHooks />
    <Suspense>{router}</Suspense>
  );
}

export default App;
