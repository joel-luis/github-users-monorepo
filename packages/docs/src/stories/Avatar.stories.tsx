import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@github-users/react'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/octocat.png',
    alt: 'Joel Luis',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
