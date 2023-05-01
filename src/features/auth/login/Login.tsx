import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import style from "./Login.module.css";

export const Login = () => {
  const dispatch = useAppDispatch();
  const loginHandler = () => {
    const payload = {
      email: "vanyakevra@gmail.com",
      password: "12345678",
      rememberMe: false,
    };
    dispatch(authThunks.login(payload));
  };
  return (
    <div className={style.container}>
      <h1>Login</h1>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
