import React, { ReactNode } from 'react'

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './Select.module.scss'

export const SelectDemo = () => (
  <Select.Root>
    <Select.Trigger aria-label={'Food'} className={s.selectTrigger}>
      <Select.Value placeholder={'Select a fruit…'} />
      <Select.Icon className={s.selectIcon}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={'SelectContent'}>
        <Select.ScrollUpButton className={s.selectScrollButton}>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className={s.selectViewport}>
          <Select.Group>
            <Select.Label className={s.electLabel}>Fruits</Select.Label>
            <SelectItem value={'apple'}>Apple</SelectItem>
            <SelectItem value={'banana'}>Banana</SelectItem>
            <SelectItem value={'blueberry'}>Blueberry</SelectItem>
            <SelectItem value={'grapes'}>Grapes</SelectItem>
            <SelectItem value={'pineapple'}>Pineapple</SelectItem>
          </Select.Group>

          <Select.Separator className={s.electSeparator} />

          <Select.Group>
            <Select.Label className={s.selectLabel}>Vegetables</Select.Label>
            <SelectItem value={'aubergine'}>Aubergine</SelectItem>
            <SelectItem value={'broccoli'}>Broccoli</SelectItem>
            <SelectItem value={'carrot'}>Carrot</SelectItem>
            <SelectItem value={'courgette'}>Courgette</SelectItem>
            <SelectItem value={'leek'}>Leek</SelectItem>
          </Select.Group>

          <Select.Separator className={'SelectSeparator'} />

          <Select.Group>
            <Select.Label className={s.selectLabel}>Meat</Select.Label>
            <SelectItem value={'beef'}>Beef</SelectItem>
            <SelectItem value={'chicken'}>Chicken</SelectItem>
            <SelectItem value={'lamb'}>Lamb</SelectItem>
            <SelectItem value={'pork'}>Pork</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className={s.selectScrollButton}>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

type SelectItemProps = {
  children?: ReactNode
  className?: string
  value: string
}
const SelectItem = React.forwardRef(
  ({ children, className, value, ...props }: SelectItemProps, forwardedRef) => {
    return (
      <Select.Item
        className={s.selectItem}
        value={value}
        {...props}
        //   ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={'SelectItemIndicator'}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    )
  }
)

export default SelectDemo
