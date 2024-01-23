import { Provider } from 'react-redux'

import { store } from '@/services/store'

import { Router } from './Router'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
