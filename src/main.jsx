import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./Utils/routeProvider.js";
import Layout from "./Components/Layout";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  </React.StrictMode>
);
