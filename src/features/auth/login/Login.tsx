import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import { Header } from "features/auth/login/header/Header";
import style from "./Style.module.css";

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
    <div>
      <Header loginHandler={loginHandler} />
      <div className={style.container}>
        <h1>Sign in</h1>
        <span>Email</span>
        <span>Password</span>
        <span>Remember me</span>
        <span>Forgot password</span>
        <span>Forgot password</span>
        <span>sign in</span>
        <span>Don`t have an account?</span>
        <span>Sign up</span>
      </div>
    </div>
  );
};
