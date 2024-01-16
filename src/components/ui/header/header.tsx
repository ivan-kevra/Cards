import s from './header.module.scss'

import { Button } from '../button'
import logo from './icons/logo.svg'

type Props = {
  isLoggedIn: boolean
}
export const Header = (props: Props) => {
  const { isLoggedIn = false } = props

  return (
    <div className={s.container}>
      <img alt={'logo'} className={s.logo} src={logo} />
      {isLoggedIn ? (
        <div className={s.userContainer}>
          Ivan
          <div className={s.user}></div>
        </div>
      ) : (
        <Button text={'Sign in'} />
      )}
    </div>
  )
}
