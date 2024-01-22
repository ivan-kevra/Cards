import s from './App.module.scss'

import { Header } from './components/ui/header/Header'
import { SignIn } from './pages/signIn/SignIn'

export const App = () => {
  return (
    <div className={s.container}>
      <Header isLoggedIn={false} />
      <SignIn />
    </div>
  )
}
