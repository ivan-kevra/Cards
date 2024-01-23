import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/Button'
import { TextField } from '@/components/ui/textField/TextField'
import { Typography } from '@/components/ui/typography/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './ForgotPassword.module.scss'

export const ForgotPassword = () => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean().optional(),
  })

  type FormValues = z.infer<typeof loginSchema>

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <div className={s.container}>
      <form className={s.content} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={'h1'}>Forgot your password?</Typography>
        <TextField
          className={s.input}
          label={'Email'}
          {...register('email')}
          errorMessage={errors.email?.message}
        ></TextField>
        <Typography className={s.body2} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button className={s.sendInstructions}>Send instructions</Button>
        <Typography variant={'body2'}>Did you remember your password?</Typography>
        <Button className={s.signUp} type={'submit'} variant={'link'}>
          Try logging in
        </Button>
      </form>
    </div>
  )
}
