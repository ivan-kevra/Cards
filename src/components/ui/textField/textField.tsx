import { ChangeEvent, ComponentProps, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import s from './textField.module.scss'

import { Typography } from '../typography/typography'
import Eye from './icons/eye'
import searchIcon from './icons/searchIcon.svg'
import VIsibilityOff from './icons/visibilityOff'

export type Props = {
  className?: string
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, label = '', onValueChange, placeholder, type, ...restProps } = props
  const [error, setError] = useState<null | string>(null)

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange && onValueChange(event?.currentTarget.value)
  }

  const classNames = {
    input: clsx(
      type === 'search' && s.search,
      type === 'text' && s.text,
      type === 'password' && s.password,
      s.input
    ),
    inputContainer: clsx(s.inputContainer),
    root: clsx(error && s.error, className, s.container),
  }

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const isShowPasswordButtonShown = type === 'password'

  return (
    <div className={classNames.root}>
      <Typography as={'label'} className={s.title} variant={'body2'}>
        {label}
      </Typography>
      <div className={classNames.inputContainer}>
        {type === 'search' && <img className={s.searchIcon} src={searchIcon} />}
        <input
          className={classNames.input}
          onChange={onChangeTitle}
          placeholder={placeholder}
          ref={ref}
          {...restProps}
        />
        {isShowPasswordButtonShown && (
          <button
            className={s.showPassword}
            onClick={() => setShowPassword(prev => !prev)}
            type={'button'}
          >
            {showPassword ? <VIsibilityOff /> : <Eye />}
          </button>
        )}
      </div>
      <Typography className={s.errorText} variant={'caption'}>
        {error && error}
      </Typography>
    </div>
  )
})
