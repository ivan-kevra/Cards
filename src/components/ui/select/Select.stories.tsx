import type { Meta, StoryObj } from '@storybook/react'

import { SelectDemo } from './Select'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: SelectDemo,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof SelectDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    // children: 'Primary Select',
    // disabled: false,
    // variant: 'primary',
  },
}
