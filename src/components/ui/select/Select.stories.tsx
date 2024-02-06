import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta = {
  argTypes: {
    variant: {
      // control: { type: 'radio' },
      // options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    // children: 'Primary Select',
    // disabled: false,
    // variant: 'primary',
  },
}
