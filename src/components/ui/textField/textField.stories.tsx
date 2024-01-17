import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '.'

const meta = {
  argTypes: {
    type: {
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
    type: 'default',
  },
}

export const Password: Story = {
  args: {
    name: 'password TextField',
    type: 'password',
  },
}
export const Search: Story = {
  args: {
    type: 'search',
  },
}
