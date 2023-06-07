import React from "react";
import TextField from "@mui/material/TextField";
import { UseFormRegister } from "react-hook-form";
import { ArgLoginType } from "features/auth/auth.api";

type EmailPropsType = {
  register: UseFormRegister<ArgLoginType>;
};
export const Email = (props: EmailPropsType) => {
  return (
    <TextField
      defaultValue={"vanyakevra@gmail.com"}
      {...props.register("email", { required: true })}
      id="standard-basic"
      label="Email"
      variant="standard"
      sx={{ m: 1, width: "85%" }}
    />
  );
};