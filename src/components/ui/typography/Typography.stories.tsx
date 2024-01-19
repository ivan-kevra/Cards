import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Large text',
    variant: 'large',
  },
}
export const H1: Story = {
  args: {
    children: 'h1 text',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'h2 text',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'h3 text',
    variant: 'h3',
  },
}
export const Body1: Story = {
  args: {
    children: 'body1 text',
    variant: 'body1',
  },
}
export const Body2: Story = {
  args: {
    children: 'body2 text',
    variant: 'body2',
  },
}
export const Caption: Story = {
  args: {
    children: 'Caption text',
    variant: 'caption',
  },
}
export const Overline: Story = {
  args: {
    children: 'Overline text',
    variant: 'overline',
  },
}
export const Subtitle1: Story = {
  args: {
    children: 'Subtitle1 text',
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'Subtitle2 text',
    variant: 'subtitle2',
  },
}
export const Link1: Story = {
  args: {
    children: 'Link1 text',
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    children: 'Link2 text',
    variant: 'link2',
  },
}
// TODO
// ADD VISITED LINKS STYLE
