import type { Meta, StoryObj } from '@storybook/react'
import { UserGrid } from '@github-users/react'

const meta: Meta<typeof UserGrid> = {
  title: 'Components/UserGrid',
  component: UserGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof UserGrid>

const mockUsers = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  login: `user${i + 1}`,
  avatar_url: `https://github.com/user${i + 1}.png`,
  html_url: `https://github.com/user${i + 1}`,
  type: i % 3 === 0 ? 'Organization' : 'User',
  score: Math.random() * 100,
}))

export const Default: Story = {
  args: {
    users: mockUsers,
  },
}

export const SingleUser: Story = {
  args: {
    users: [mockUsers[0]],
  },
}

export const FewUsers: Story = {
  args: {
    users: mockUsers.slice(0, 3),
  },
}

export const ManyUsers: Story = {
  args: {
    users: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      login: `developer${i + 1}`,
      avatar_url: `https://github.com/developer${i + 1}.png`,
      html_url: `https://github.com/developer${i + 1}`,
      type: i % 4 === 0 ? 'Organization' : 'User',
      score: Math.random() * 100,
    })),
  },
}
