import s from './App.module.scss'

import { Checkbox } from './components/ui/checkbox/checkbox'

export const App = () => {
  return (
    <div className={s.container}>
      <Checkbox checked label={'checkbox'} />
      <Checkbox checked={false} label={'checkbox'} />
      <Checkbox checked disabled label={'disabled'} />
      <Checkbox checked={false} disabled label={'disabled'} />
    </div>
  )
}
