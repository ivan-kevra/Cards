import logo from "features/auth/login/img/logo.svg";
import React from "react";
import style from "./Style.module.css";

type HeaderPropsType = {
  loginHandler: () => void;
};
export const Header = (props: HeaderPropsType) => {
  return (
    <div className={style.header}>
      <img src={logo} alt={"logo"} />
      <button onClick={props.loginHandler} className={style.button}>
        <span>Sign in</span>
      </button>
    </div>
  );
};
