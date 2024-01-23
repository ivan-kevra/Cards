import s from './App.module.scss'

import { Header } from './components/ui/header/Header'
import { CheckEmail } from './pages/checkEmail/CheckEmail'
import { CreateNewPassword } from './pages/createNewPassword/CreateNewPassword'
import { ForgotPassword } from './pages/forgotPassword/ForgotPassword'
import Profile from './pages/profile/Profile'
import { SignIn } from './pages/signIn/SignIn'
import { SignUp } from './pages/signUp/SignUp'

export const App = () => {
  return (
    <div className={s.container}>
      <Header isLoggedIn={false} />
      <SignIn />
      <SignUp />
      <ForgotPassword />
      <CheckEmail />
      <CreateNewPassword />
      <Profile />
    </div>
  )
}
