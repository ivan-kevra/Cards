import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import { Header } from "features/auth/login/header/Header";
import style from "./Style.module.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className={style.login}>
      {/*<Header onSubmit={loginHandler} />*/}

      <div className={style.container}>
        <h1>Sign in</h1>
        <TextField
          value={"vanyakevra@gmail.com"}
          id="standard-basic"
          label="Email"
          variant="standard"
          sx={{ m: 1, width: "85%" }}
        />
        <FormControl sx={{ m: 1, width: "85%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            value={"12345678"}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className={style.rememberMe}>
          <Checkbox defaultChecked />
          <span>Remember me</span>
        </div>
        <span className={style.forgotPassword}>Forgot password?</span>

        <button onClick={loginHandler} className={style.button}>
          <span>Sign in</span>
        </button>

        <span className={style.noAccount}>Don`t have an account?</span>
        <Button variant="text">Sign up</Button>
      </div>
    </div>
  );
};
