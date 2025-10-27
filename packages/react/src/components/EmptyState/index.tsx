import type { ComponentProps } from 'react'
import type { EmptyStateProps } from '../../types'

import {
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
} from './styles'

export type { EmptyStateProps }

export function EmptyState({
  icon,
  title,
  description,
  ...props
}: EmptyStateProps & ComponentProps<typeof EmptyStateContainer>) {
  return (
    <EmptyStateContainer {...props}>
      <EmptyStateIcon>{icon}</EmptyStateIcon>
      <EmptyStateTitle>{title}</EmptyStateTitle>
      <EmptyStateDescription>{description}</EmptyStateDescription>
    </EmptyStateContainer>
  )
}

EmptyState.displayName = 'EmptyState'
