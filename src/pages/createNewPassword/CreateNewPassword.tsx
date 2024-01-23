import { useForm } from 'react-hook-form'

import { TextField } from '@/components/ui/textField/TextField'
import { Typography } from '@/components/ui/typography/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './CreateNewPassword.module.scss'
import { Button } from '@/components/ui/button/Button'

export const CreateNewPassword = () => {
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
        <Typography className={s.h1} variant={'h1'}>
          Create new password
        </Typography>
        <TextField
          label={'Password'}
          {...register('password')}
          className={s.input}
          errorMessage={errors.password?.message}
          type={'password'}
        ></TextField>
        <Typography className={s.body2} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button>Create new password</Button>
      </form>
    </div>
  )
}
