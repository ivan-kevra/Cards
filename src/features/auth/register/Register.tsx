import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import style from "./Register.module.css";

export const Register = () => {
  const dispatch = useAppDispatch();
  const registerHandler = () => {
    const payload = {
      email: "vanyakevra@gmail.com",
      password: "12345678",
    };
    dispatch(authThunks.register(payload));
  };
  return (
    <div className={style.container}>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  );
};
