import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import { ArgLoginType } from "features/auth/auth.api";
import React from "react";
import style from "features/auth/login/Style.module.css";
import logo from "features/auth/login/img/logo.svg";
import { Header } from "components/header/Header";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Email } from "components/email/Email";
import { Password } from "components/password/Password";

export const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArgLoginType>();
  const onSubmit: SubmitHandler<ArgLoginType> = (data) => {
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
          <Checkbox defaultChecked />
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
