import React from "react";
import Layout from "../Layout";
import RouterHome from "../RouterHome";
import { myPageRouter } from "./myPageRouter";

const RouterAbout = React.lazy(() => import('../RouterAbout'));

export const indexRouter: any = {
  path: '/',
  element: (
    <Layout />
  ),
  children: [
    { path: 'about', element: <RouterAbout /> },
    { path: 'home', element: <RouterHome /> },
    {
      ...myPageRouter
    }
  ],
};