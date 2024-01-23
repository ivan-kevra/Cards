import * as T from '@radix-ui/react-tabs'

import s from './Tabs.module.scss'

type Props = {
  title: string
  value: string
}
export const Tabs = (props: Props) => {
  const {} = props

  return (
    <T.Root defaultValue={'tab1'} orientation={'vertical'}>
      <T.List aria-label={'tabs example'}>
        <T.Trigger className={s.tab} value={'tab1'}>
          Switcher One
        </T.Trigger>
        <T.Trigger className={s.tab} value={'tab2'}>
          Switcher Two
        </T.Trigger>
        <T.Trigger className={s.tab} value={'tab3'}>
          Switcher Three
        </T.Trigger>
      </T.List>
      <T.Content value={'tab1'}>Tab one content</T.Content>
      <T.Content value={'tab2'}>Tab two content</T.Content>
      <T.Content value={'tab3'}>Tab three content</T.Content>
    </T.Root>
  )
}
