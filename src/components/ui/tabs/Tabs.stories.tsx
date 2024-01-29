import type { Meta, StoryObj } from '@storybook/react'

import { TabContent, Tabs } from './Tabs'

const meta = {
  args: {
    tabs: [
      { title: 'Спринты', value: 'sprints' },
      { title: 'Недели', value: 'weeks' },
      { title: 'Темы', value: 'subjects' },
    ],
  },
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    tabs: [
      { title: '1st', value: 'sprints' },
      { title: '2nd', value: 'weeks' },
      { title: '3rd', value: 'subjects' },
    ],
  },
}
