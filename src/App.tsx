import s from './App.module.scss'

import { Header } from './components/ui/header/Header'
import { SignUp } from './pages/signUp/SignUp'

export const App = () => {
  return (
    <div className={s.container}>
      <Header isLoggedIn={false} />
      <SignUp />
    </div>
  )
}
