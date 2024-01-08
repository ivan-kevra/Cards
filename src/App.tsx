import { Button } from './components/ui/button'

export function App() {
  return (
    <div>
      <Button as="a" href="/link">
        as link
      </Button>
      <Button as="button">as button</Button>
    </div>
  )
}
