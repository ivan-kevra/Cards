import React from "react";
import { authThunks } from "features/auth/auth.slice";
import { useAppDispatch } from "app/hooks";
import s from "features/auth/register/Style.module.css";

export const Register = () => {
  const dispatch = useAppDispatch();
  const registerHandler = () => {
    const payload = {
      email: "vanyakevra@gmail.com",
      password: "12345678"
    };
    dispatch(authThunks.register(payload));
  };

  return (
    <div className={s.container}>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  );
};
