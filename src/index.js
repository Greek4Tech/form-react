import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ComboForm from './components/comboForm'
import Success from './routes/root';
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
    // path: "/",: This line specifies that the route path is "/", meaning it will match the root of the application.
    {
      path: "/",
      element: <ComboForm />,
      errorElement: <ErrorPage />,
    },
    //     {
      {
      path: "/success",
      element: <Success />,
      errorElement: <ErrorPage />,
      }
  ]);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
