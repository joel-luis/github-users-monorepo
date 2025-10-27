import type { Meta, StoryObj } from '@storybook/react'
import { MagnifyingGlass } from 'phosphor-react'
import { EmptyState } from '@github-users/react'

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {
    icon: <MagnifyingGlass weight="bold" />,
    title: 'Search for users',
    description:
      "Type a developer's name in the field above to find GitHub profiles",
  },
}

export const NoResults: Story = {
  args: {
    icon: <MagnifyingGlass weight="bold" />,
    title: 'No results found',
    description:
      'We couldn\'t find any users for "john". Try searching for another term',
  },
}
