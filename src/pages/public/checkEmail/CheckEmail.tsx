import { useForm } from 'react-hook-form'

import { Typography } from '@/components/ui/typography/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './CheckEmail.module.scss'

import email from './assets/email.svg'
import { Button } from '@/components/ui/button/Button'

export const CheckEmail = () => {
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
        <Typography variant={'h1'}>Check Email</Typography>
        <img className={s.image} src={email} />
        <Typography className={s.body2} variant={'body2'}>
          We’ve sent an Email with instructions to example@mail.com
        </Typography>
        <Button>Back to Sign In</Button>
      </form>
    </div>
  )
}
