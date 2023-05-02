import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import style from "features/auth/register/Style.module.css";
import { Header } from "../../../components/header/Header";

export const RegisterCopy = () => {
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
      <Header />
    </div>
  );
};
