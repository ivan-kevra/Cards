import React from "react";
import { authThunks } from "features/auth/auth.slice";
import { useAppDispatch } from "app/hooks";
import { Header } from "components/header/Header";
import style from "./Style.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArgRegisterType, AuthResponseType } from "features/auth/auth.api";
import { Email } from "components/email/Email";
import { Password } from "components/password/Password";
import Button from "@mui/material/Button/Button";

export const Register = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthResponseType>();
  const onSubmit: SubmitHandler<AuthResponseType> = (data) => {
    console.log(data);
    dispatch(authThunks.register(data));
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className={style.register}>
        <div className={style.container}>
          <h1>Sign Up</h1>
          <Email register={register} />
          <Password register={register} label={"Password"} />
          <Password register={register} label={"Confirm password"} />
          <button className={style.button}>
            <span>Sign up</span>
          </button>
          <span className={style.account}>Already have account?</span>
          <Button variant="text">Sign in</Button>
        </div>

      </form>
    </>
  );
};
