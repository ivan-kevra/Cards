import logo from "features/auth/login/img/logo.svg";
import Button from "@mui/material/Button";
import React from "react";
import style from "./Style.module.css";

type HeaderPropsType = {
  loginHandler: () => void;
};
export const Header = (props: HeaderPropsType) => {
  return (
    <div className={style.header}>
      <img src={logo} alt={"logo"} />
      <Button variant="contained" onClick={props.loginHandler} className={style.button}>
        Sign in
      </Button>
    </div>
  );
};
