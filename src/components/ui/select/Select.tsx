import { useState } from 'react'

import * as SelectR from '@radix-ui/react-select'

import s from './Select.module.scss'

import { Typography } from '../typography/Typography'
import arrow from './icon/arrow.svg'
import arrowTop from './icon/arrowTop.svg'

type Props = {}
export const Select = ({}: Props) => {
  const [open, setOpen] = useState(false)

  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  const [value, setValue] = useState<string>('Select-box')

  return (
    <SelectR.Root onOpenChange={() => setOpen(!open)} onValueChange={setValue}>
      <SelectR.Trigger className={s.trigger}>
        <SelectR.Value placeholder={value}>
          <Typography variant={'body1'}>{value}</Typography>
        </SelectR.Value>
        <SelectR.Icon className={s.selectIcon}>
          <img src={open ? arrowTop : arrow} />{' '}
        </SelectR.Icon>
      </SelectR.Trigger>

      <SelectR.Portal>
        <SelectR.Content className={s.content} position={'popper'} sideOffset={0}>
          {values.map(value => (
            <SelectItem key={value} value={value} />
          ))}
        </SelectR.Content>
      </SelectR.Portal>
    </SelectR.Root>
  )
}

type SelectItemProps = {
  value: string
}
const SelectItem = ({ value }: SelectItemProps) => {
  return (
    <SelectR.Item className={s.item} value={value}>
      <SelectR.ItemText>
        <Typography className={s.text} variant={'body1'}>
          {value}
        </Typography>
      </SelectR.ItemText>
    </SelectR.Item>
  )
}
