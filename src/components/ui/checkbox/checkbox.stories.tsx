import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    text: {
      control: { type: 'text' },
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'disabled',
  },
}
