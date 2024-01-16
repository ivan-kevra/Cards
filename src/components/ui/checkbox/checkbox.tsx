import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './checkbox.module.scss'

import { Typography } from '../typography/typography'
import CheckIcon from './checkIcon/checkIcon'
import { useState } from 'react'

type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  position?: 'left'
  required?: boolean
}
export const Checkbox = (props: CheckboxProps) => {
  const {
    checked = false,
    className,
    disabled = false,
    id,
    label = '',
    onChange,
    position,
    required,
  } = props

  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
    container: clsx(s.container, className),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  const [check, setCheck] = useState<boolean>(checked)

  const onChangeHandler = () => {
    setCheck(!check)
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root asChild>
        <Typography as={'label'} className={classNames.label} variant={'body2'}>
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root
              checked={check}
              className={classNames.root}
              disabled={disabled}
              id={id}
              onCheckedChange={onChangeHandler}
              required={required}
            >
              {check && (
                <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                  <CheckIcon />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
}
