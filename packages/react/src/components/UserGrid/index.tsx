'use client'

import type { ComponentProps } from 'react'
import { UserCard } from '../UserCard'
import type { UserGridProps } from '../../types'
import { Spinner } from '../Spinner'
import { EmptyState } from '../EmptyState'
import { MagnifyingGlass, WarningCircle } from 'phosphor-react'

import { UserGridContainer, LoadingContainer, EmptyContainer } from './styles'

export type { UserGridProps }

export function UserGrid({
  users,
  isLoading,
  isFetchingMore,
  error,
  onUserClick,
  ...props
}: UserGridProps & ComponentProps<typeof UserGridContainer>) {
  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    )
  }

  if (error) {
    return (
      <EmptyContainer>
        <EmptyState
          icon={<WarningCircle weight="bold" />}
          title="Error"
          description={error}
        />
      </EmptyContainer>
    )
  }

  if (users.length === 0) {
    return (
      <EmptyContainer>
        <EmptyState
          icon={<MagnifyingGlass weight="bold" />}
          title="No users found"
          description="Try searching for a different username"
        />
      </EmptyContainer>
    )
  }

  return (
    <UserGridContainer {...props}>
      {users.map((user, index) => (
        <UserCard
          key={`${user.id}-${index}`}
          user={user}
          onClick={onUserClick ? () => onUserClick(user) : undefined}
        />
      ))}
      {isFetchingMore && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
    </UserGridContainer>
  )
}

UserGrid.displayName = 'UserGrid'
