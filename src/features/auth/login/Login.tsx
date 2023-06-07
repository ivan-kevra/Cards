import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArgLoginType, ArgRegisterType, AuthResponseType } from "features/auth/auth.api";
import { Header } from "components/header/Header";
import style from "./Style.module.css";
import { Email } from "components/email/Email";
import { Password } from "components/password/Password";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Button from "@mui/material/Button/Button";

export const Login = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<AuthResponseType>();
  const onSubmit: SubmitHandler<AuthResponseType> = data => {
    console.log(data);
    dispatch(authThunks.login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
      <Header />
      <div className={style.container}>
        <h1>Sign in</h1>
        <Email register={register} />
        <Password register={register} label={"Password"} />
        <div className={style.rememberMe}>
          <Checkbox defaultChecked {...register("rememberMe", { required: true })} />
          <span>Remember me</span>
        </div>
        <span className={style.forgotPassword}>Forgot password?</span>

        <button type="submit" className={style.button}>
          <span>Sign in</span>
        </button>
        <span className={style.noAccount}>Don`t have an account?</span>
        <Button variant="text">Sign up</Button>
      </div>
    </form>
  );
};

