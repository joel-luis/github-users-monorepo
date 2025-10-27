import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '@github-users/react'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}
