import s from './App.module.scss'

import { Header } from './components/ui/header/Header'
import { ForgotPassword } from './pages/forgotPassword/ForgotPassword'
import { SignIn } from './pages/signIn/SignIn'
import { SignUp } from './pages/signUp/SignUp'

export const App = () => {
  return (
    <div className={s.container}>
      <Header isLoggedIn={false} />
      <SignIn />
      <SignUp />
      <ForgotPassword />
    </div>
  )
}
