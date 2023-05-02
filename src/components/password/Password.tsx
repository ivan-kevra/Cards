import React from "react";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";
import { UseFormRegister } from "react-hook-form";
import { ArgLoginType } from "features/auth/auth.api";

type PasswordPropsType = {
  register: UseFormRegister<ArgLoginType>;
  label: string;
};

export const Password = (props: PasswordPropsType) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <FormControl sx={{ m: 1, width: "85%" }} variant="standard">
      <InputLabel htmlFor="standard-adornment-password">{props.label}</InputLabel>
      <Input
        defaultValue={"12345678"}
        {...props.register("password", { required: true, minLength: 8 })}
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
  );
};
