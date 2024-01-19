import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './Index'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'search'],
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
    name: 'text TextField',
    type: 'text',
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
