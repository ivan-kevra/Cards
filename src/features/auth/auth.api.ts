import { instance, passwordInstance } from "common/common.api";

export const authApi = {
  register: (arg: AuthResponseType) => {
    return instance.post<RegisterResponseType>("auth/register", arg);
  },
  login: (arg: AuthResponseType) => {
    return instance.post<ProfileType>("auth/login", arg);
  },
  sendNewPassword: (arg: EmailType) => {
    return passwordInstance.post<SendNewPasswordResponseType>("auth/forgot", arg);
  }
};

//type
export type AuthResponseType = ArgLoginType | ArgRegisterType | EmailType
export type ArgLoginType = {
  email: string
  password: string
  rememberMe: boolean
}
export type ArgRegisterType = Omit<ArgLoginType, "rememberMe">
export type RegisterResponseType = {
  addedUser: Omit<ProfileType, "token" | "tokenDeathTime">
}
export type ProfileType = {
  _id: string
  email: string
  rememberMe: boolean,
  isAdmin: boolean,
  name: string
  verified: boolean,
  publicCardPacksCount: number,
  created: string
  updated: string
  __v: number,
  token: string
  tokenDeathTime: number
}
export type EmailType = {
  email: string
}
export type SendNewPasswordResponseType = {
  info: string
  success: boolean
  answer: boolean
  html: boolean
}