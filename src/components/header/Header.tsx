import logo from "../../assets/img/logo.svg";
import React from "react";
import style from "components/header/Style.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <img src={logo} alt={"logo"} />
      <button className={style.button}>
        <span>Sign in</span>
      </button>
    </div>
  );
};