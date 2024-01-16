import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

import { Typography } from '../typography/typography'
import editIcon from './icons/edit.svg'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  hasIcon?: boolean
  text: string
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    hasIcon = false,
    text,
    variant = 'primary',
    ...rest
  } = props

  const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

  return (
    <Component className={classNames} {...rest}>
      {hasIcon ? <img alt={'edit'} className={s.img} src={editIcon} /> : null}
      <Typography variant={variant === 'link' ? 'subtitle1' : 'subtitle2'}>{text}</Typography>
    </Component>
  )
}
