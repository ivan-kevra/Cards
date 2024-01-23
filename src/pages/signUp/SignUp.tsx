import { TextField } from '@/components/ui/textField/TextField'
import { Typography } from '@/components/ui/typography/Typography'

import s from './SIgnUp.module.scss'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledCheckbox } from '@/components/controlled/ControlledCheckbox'
import { Button } from '@/components/ui/button/Button'

export const SignUp = () => {
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
        <Typography variant={'h1'}>Sign up</Typography>
        <TextField
          className={s.input}
          label={'Email'}
          {...register('email')}
          errorMessage={errors.email?.message}
        ></TextField>
        <TextField
          label={'Password'}
          {...register('password')}
          errorMessage={errors.password?.message}
          type={'password'}
        ></TextField>
        <TextField
          label={'Confirm password'}
          {...register('password')}
          errorMessage={errors.password?.message}
          type={'password'}
        ></TextField>
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
        />
        <Button>Sign up</Button>
        <Typography as={'h1'} variant={'body2'}>
          Already have an account?
        </Typography>
        <Button className={s.signUp} type={'submit'} variant={'link'}>
          Sign in
        </Button>
      </form>
    </div>
  )
}
