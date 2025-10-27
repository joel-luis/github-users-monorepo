'use client'

import type { ComponentProps } from 'react'
import { MagnifyingGlass, X } from 'phosphor-react'
import type { SearchBarProps } from '../../types'

import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarIcon,
  ClearButton,
} from './styles'

export type { SearchBarProps }

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search users...',
  isLoading,
  ...props
}: SearchBarProps & ComponentProps<typeof SearchBarContainer>) {
  return (
    <SearchBarContainer {...props}>
      <SearchBarIcon>
        <MagnifyingGlass weight="bold" />
      </SearchBarIcon>
      <SearchBarInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={isLoading}
      />
      {value && (
        <ClearButton onClick={() => onChange('')}>
          <X weight="bold" />
        </ClearButton>
      )}
    </SearchBarContainer>
  )
}

SearchBar.displayName = 'SearchBar'
