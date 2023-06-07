import React from "react";
import { useAppDispatch } from "app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthResponseType, EmailType } from "features/auth/auth.api";
import { authThunks } from "features/auth/auth.slice";
import style from "features/auth/login/Style.module.css";
import { Email } from "components/email/Email";
import Button from "@mui/material/Button/Button";
import { Header } from "components/header/Header";

export const NewPassword = () => {

  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<AuthResponseType>();
  const onSubmit: SubmitHandler<AuthResponseType> = data => {
    dispatch(authThunks.sendNewPassword(data));
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

