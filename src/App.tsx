import s from './App.module.scss'

import { LoginForm } from './components/auth/loginForm/loginForm'

export const App = () => {
  return (
    <div className={s.container}>
      <LoginForm />
    </div>
  )
}
