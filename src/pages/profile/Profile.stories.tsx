import type { Meta, StoryObj } from '@storybook/react'

import Profile from './Profile'

const meta = {
  component: Profile,
  tags: ['autodocs'],
  title: 'Auth/Profile',
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
