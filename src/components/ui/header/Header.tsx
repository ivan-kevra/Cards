import s from './Header.module.scss'

import { Button } from '../button/Button'
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
        <Button variant={'secondary'}>Sign in</Button>
      )}
    </div>
  )
}
