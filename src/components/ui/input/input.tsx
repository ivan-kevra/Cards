import { ChangeEvent, ComponentProps, useState } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

import { Typography } from '../typography/typography'
import cancel from './icons/cancel.svg'
import eye from './icons/eye.svg'
import searchIcon from './icons/searchIcon.svg'

export type Props = {
  className?: string
  errorMessage?: string
  icon?: string
  iconEnd?: string
  iconStart?: string
  name?: string
  onClearClick?: () => void
  search?: boolean
  value?: string
  variant?: 'default' | 'password' | 'search'
} & ComponentProps<'input'>

export const Input = (props: Props) => {
  const { className, name, variant = 'default', ...rest } = props
  const [error, setError] = useState<null | string>(null)
  const [title, setTitle] = useState<string>('')

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event?.currentTarget.value)
  }
  const clearTitleHandler = () => {
    setTitle('')
  }

  const classNames = clsx(s[variant], error && s.error, className, s.container)

  return (
    <div className={classNames}>
      <Typography className={s.title} variant={'body2'}>
        {name}
      </Typography>
      <div className={s.inputContainer}>
        {variant === 'search' && <img className={s.searchIcon} src={searchIcon} />}
        <input
          className={s.input}
          disabled={false}
          onChange={onChangeTitle}
          placeholder={'Input'}
          value={title}
        />
        {variant === 'search' && title.length !== 0 && (
          <img className={s.cancelIcon} onClick={clearTitleHandler} src={cancel} />
        )}
        {variant === 'password' && <img alt={'eye'} className={s.eyeIcon} src={eye} />}
      </div>
      <Typography className={s.errorText} variant={'caption'}>
        {error && error}
      </Typography>
    </div>
  )
}
