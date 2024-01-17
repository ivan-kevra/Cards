import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'

type FormValues = {
  email: string
  password: string
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  console.log(register('email'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
