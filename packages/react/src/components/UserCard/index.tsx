import type { ComponentProps } from 'react'
import { ArrowSquareOut } from 'phosphor-react'
import { Avatar } from '../Avatar'
import type { UserCardProps } from '../../types'

import {
  UserCardContainer,
  UserCardContent,
  UserCardAvatar,
  UserCardName,
  UserCardType,
  UserCardLink,
  UserCardLinkText,
} from './styles'

export type { UserCardProps }

export function UserCard({
  user,
  ...props
}: UserCardProps & ComponentProps<typeof UserCardContainer>) {
  return (
    <UserCardContainer {...props}>
      <UserCardContent>
        <UserCardAvatar>
          <Avatar src={user.avatar_url} alt={user.login} />
        </UserCardAvatar>

        <UserCardName>{user.login}</UserCardName>

        {user.type && <UserCardType>{user.type}</UserCardType>}

        <UserCardLink
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserCardLinkText>View Profile</UserCardLinkText>
          <ArrowSquareOut weight="bold" />
        </UserCardLink>
      </UserCardContent>
    </UserCardContainer>
  )
}

UserCard.displayName = 'UserCard'
