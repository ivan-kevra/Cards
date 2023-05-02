import { instance } from "common/api/common.api";

export const authApi = {
  register: (arg: ResponseType) => {
    return instance.post<ProfileResponseType>("auth/register", arg);
  },
  login: (arg: ResponseType) => {
    return instance.post<ProfileType>("auth/login", arg);
  },
  forgot: (arg: ResponseType) => {
    return instance.post<EmailInfoType>("https://neko-back.herokuapp.com/2.0/auth/forgot", arg);
  },
};

//types
export type ArgRegisterType = {
  email: string;
  password: string;
};
export type ArgLoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type ArgForgotType = {
  email: string;
  from: string;
  message: string;
};

export type ProfileResponseType = {
  profile: Omit<ProfileType, "token" | "tokenDeathTime">;
};

export type ProfileType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: string;
};

export type EmailInfoType = {
  info: string;
  error: string;
};

export type ResponseType = ArgRegisterType | ArgLoginType | ArgForgotType;
