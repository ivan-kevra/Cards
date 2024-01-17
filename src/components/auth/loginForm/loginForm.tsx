import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { TextField } from '@/components/ui/textField'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} type={'password'} />
      <TextField {...register('email')} label={'email'} type={'search'} />
      <Checkbox checked={value} label={'Remember me'} onValueChange={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
