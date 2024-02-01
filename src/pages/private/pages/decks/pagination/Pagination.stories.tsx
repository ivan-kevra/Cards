import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './Pagination'

const meta = {
  argTypes: {
    // variant: {
    //   control: { type: 'radio' },
    //   options: ['primary', 'secondary', 'tertiary', 'link'],
    // },
  },
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: '',
  },
}
