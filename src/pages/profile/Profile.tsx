import { Button } from '@/components/ui/button/Button'
import { Typography } from '@/components/ui/typography/Typography'

import s from './Profile.module.scss'

import edit from './assets/edit.svg'
import editAvatar from './assets/editAvatar.svg'
import logout from './assets/logout.svg'
import profile from './assets/profile.svg'

export default () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <Typography variant={'h1'}>Personal Information</Typography>
        <div className={s.editAvatar}>
          <img className={s.img} src={profile} />
          <img className={s.editIcon} src={editAvatar} />
        </div>
        <div className={s.user}>
          <Typography variant={'h2'}>Ivan</Typography>
          <img src={edit} />
        </div>
        <Typography variant={'body2'}>j&johnson@gmail.com</Typography>
        <Button className={s.sendInstructions} variant={'secondary'}>
          <img src={logout} />
          Logout
        </Button>
      </div>
    </div>
  )
}
