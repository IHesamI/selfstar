import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { persistor, store } from "./Store/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./Utils/routeProvider.js";
import Layout from "./Components/Layout";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
// import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
            <App />
          <RouterProvider router={router} />
        </Layout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
