import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import News from "./components/News";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App></App>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "business",
        element: <News key="business" pageSize={6} country="us" category="business"/>,
      },
        {path: "sports",
        element: <News key="sports" pageSize={6} country="us" category="sports"/>,
      },
        {path: "entertainment",
        element: <News key="entertainment" pageSize={6} country="us" category="entertainment"/>,
      },
        {path: "general",
        element: <News key="general" pageSize={6} country="us" category="general"/>,
      },
        {path: "health",
        element: <News key="health" pageSize={6} country="us" category="health"/>,
      },
        {path: "science",
        element: <News key="science" pageSize={6} country="us" category="science"/>,
      },
        {path: "technology",
        element: <News key="technology" pageSize={6} country="us" category="technology"/>,
      },

     
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();