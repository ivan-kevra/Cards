import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/ControlledCheckbox'
import { TextField } from '@/components/ui/textField/TextField'
import { Typography } from '@/components/ui/typography/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignIn.module.scss'
import { Button } from '@/components/ui/button/Button'
import { H1 } from '@/components/ui/typography/Typography.stories'

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
      <div className={s.content}>
        <Typography variant={'h1'}>Sign in</Typography>
        <TextField className={s.input} label={'Email'}></TextField>
        <TextField label={'Password'}></TextField>
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
        />
        <Button className={s.forgotPassword} variant={'link'}>
          Forgot password?
        </Button>
        <Button>Sign in</Button>
        <Typography as={'h1'} variant={'body2'}>
          Don't have an account?
        </Typography>
        <Button className={s.signUp} variant={'link'}>
          Sign up
        </Button>
      </div>
    </div>
  )
}
