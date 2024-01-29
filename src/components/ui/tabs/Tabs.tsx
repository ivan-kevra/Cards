import { ReactNode } from 'react'

import * as TabRadix from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './Tabs.module.scss'

export type TabType = {
  disabled?: boolean
  title: string
  value: string
}
type Props = {
  children?: ReactNode
  defaultValue?: any
  onValueChange?: (value: string) => void
  tabs: TabType[]
  value?: string
}
export const Tabs = ({ defaultValue, onValueChange, tabs, value }: Props) => {
  const classNames = {
    list: clsx(s.list),
    root: s.root,
    trigger: clsx(s.trigger),
  }

  return (
    <TabRadix.Root
      className={classNames.root}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <TabRadix.List className={classNames.list}>
        {tabs?.map(tab => (
          <TabRadix.Trigger
            className={classNames.trigger}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
          </TabRadix.Trigger>
        ))}
      </TabRadix.List>
    </TabRadix.Root>
  )
}

export type TabContentProps = {
  children: ReactNode
  value: string
}
export const TabContent = ({ children, value }: TabContentProps) => {
  return (
    <TabRadix.Content className={s.content} value={value}>
      {children}
    </TabRadix.Content>
  )
}
