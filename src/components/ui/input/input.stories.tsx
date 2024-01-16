import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'password', 'search'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'default input',
    variant: 'default',
  },
}

export const Password: Story = {
  args: {
    name: 'password input',
    variant: 'password',
  },
}
export const Search: Story = {
  args: {
    variant: 'search',
  },
}
