import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import style from "features/auth/register/Style.module.css";
import { Header } from "components/header/Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArgLoginType } from "features/auth/auth.api";
import { Email } from "components/email/Email";
import { Password } from "components/password/Password";
import Button from "@mui/material/Button";

export const Register = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArgLoginType>();
  const onSubmit: SubmitHandler<ArgLoginType> = (data) => {
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
