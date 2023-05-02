import { Header } from "components/header/Header";
import React from "react";
import { Email } from "components/email/Email";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "features/auth/login/Style.module.css";
import Button from "@mui/material/Button";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import { ResponseType } from "features/auth/auth.api";

export const RestorePassword = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<ResponseType>();
  const onSubmit: SubmitHandler<ResponseType> = (data) => {
    console.log(data);
    dispatch(authThunks.forgot(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
      <Header />
      <div className={style.container}>
        <h1>Forgot your password?</h1>
        <Email register={register} />
        <span className={style.noAccount}>Enter your email address and we will send you further instructions</span>
        <button type="submit" className={style.button}>
          <span>Send instructions</span>
        </button>
        <span className={style.noAccount}>Did you remember your password?</span>
        <Button variant="text">Try logging in</Button>
      </div>
    </form>
  );
};
