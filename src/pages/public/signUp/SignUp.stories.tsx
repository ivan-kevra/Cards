import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from './SignUp'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Auth/SIgnUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
