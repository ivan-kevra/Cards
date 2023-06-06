import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  { element: <Counter />, path: "/" },
  { element: <h1>login</h1>, path: "/login" },
  { element: <h1>register</h1>, path: "/register" },
  { element: <h1>check-email</h1>, path: "/email" },
  { element: <h1>set-new-password</h1>, path: "/new-password" },
  { element: <h1>forgot-password</h1>, path: "/forgor-password" },
  { element: <h1>profile</h1>, path: "/profile" },
  { element: <h1>packs</h1>, path: "/packs" },
  { element: <h1>cards</h1>, path: "/cards" },
  { element: <h1>learn</h1>, path: "/learn" }

]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
