import type { Meta, StoryObj } from '@storybook/react'
import { UserCard } from '@github-users/react'

const meta: Meta<typeof UserCard> = {
  title: 'Components/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof UserCard>

const mockUser = {
  id: 1,
  login: 'octocat',
  avatar_url: 'https://github.com/octocat.png',
  html_url: 'https://github.com/octocat',
  type: 'User',
  score: 1.0,
}

export const Default: Story = {
  args: {
    user: mockUser,
  },
}

export const Organization: Story = {
  args: {
    user: {
      ...mockUser,
      login: 'github',
      type: 'Organization',
      avatar_url: 'https://github.com/github.png',
      html_url: 'https://github.com/github',
    },
  },
}

export const LongUsername: Story = {
  args: {
    user: {
      ...mockUser,
      login: 'very-long-username-that-might-overflow',
    },
  },
}

export const WithSpecialCharacters: Story = {
  args: {
    user: {
      ...mockUser,
      login: 'user-with_special.chars',
    },
  },
}
