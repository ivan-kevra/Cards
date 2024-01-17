import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textField'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'password', 'search'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'default TextField',
    variant: 'default',
  },
}

export const Password: Story = {
  args: {
    name: 'password TextField',
    variant: 'password',
  },
}
export const Search: Story = {
  args: {
    variant: 'search',
  },
}
