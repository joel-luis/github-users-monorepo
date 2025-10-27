import type React from 'react'
import type { GitHubUser } from './github'

// Avatar
export type AvatarProps = {
  src: string
  alt: string
}

// SearchBar
export type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
  placeholder?: string
  isLoading?: boolean
}

// UserCard
export type UserCardProps = {
  user: GitHubUser
  onClick?: () => void
}

// UserGrid
export type UserGridProps = {
  users: GitHubUser[]
  isLoading?: boolean
  isFetchingMore?: boolean
  error?: string | null
  onUserClick?: (user: GitHubUser) => void
}

// Spinner
export type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg'
}

// EmptyState
export type EmptyStateProps = {
  title: string
  description?: string
  icon?: React.ReactNode
}
