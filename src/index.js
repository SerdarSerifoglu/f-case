import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/HomePage/HomePage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArtistDetail from "./pages/ArtistDetail/ArtistDetail";
import Layout from "./components/Layout/Layout";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "/artist-detail",
    element: <ArtistDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router}></RouterProvider>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
