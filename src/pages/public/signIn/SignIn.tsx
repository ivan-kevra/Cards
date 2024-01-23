import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/ControlledCheckbox'
import { Button } from '@/components/ui/button/Button'
import { TextField } from '@/components/ui/textField/TextField'
import { Typography } from '@/components/ui/typography/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignIn.module.scss'

export const SignIn = () => {
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
          Sign in
        </Typography>
        <TextField
          label={'Email'}
          {...register('email')}
          className={s.input}
          errorMessage={errors.email?.message}
        ></TextField>
        <TextField
          label={'Password'}
          {...register('password')}
          className={s.input}
          errorMessage={errors.password?.message}
          type={'password'}
        ></TextField>
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
        />
        <Button className={s.forgotPassword} variant={'link'}>
          <Typography variant={'body2'}>Forgot password?</Typography>
        </Button>
        <Button className={s.signIn}>Sign in</Button>
        <Typography className={s.body2} variant={'body2'}>
          Don't have an account?
        </Typography>
        <Button className={s.signUp} type={'submit'} variant={'link'}>
          Sign up
        </Button>
      </form>
    </div>
  )
}
