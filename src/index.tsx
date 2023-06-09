import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { App } from "app/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "features/auth/register/Register";
import { Login } from "features/auth/login/Login";
import { NewPassword } from "features/auth/newPassword/NewPassword";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  { element: <App />, path: "/" },
  { element: <Login />, path: "/login" },
  { element: <Register />, path: "/register" },
  { element: <NewPassword />, path: "/new-password" },
  { element: <h1>packs</h1>, path: "/packs" }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
