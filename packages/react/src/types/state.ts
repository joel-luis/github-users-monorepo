/**
 * State types for GitHub Users reducer
 */

import type { GitHubUser } from "./github"

export interface GitHubUsersState {
  searchQuery: string
  users: GitHubUser[]
  total: number
  page: number
  hasMore: boolean
  isLoading: boolean
  isFetchingMore: boolean
  error: string | null
}

export const initialState: GitHubUsersState = {
  searchQuery: "",
  users: [],
  total: 0,
  page: 1,
  hasMore: false,
  isLoading: false,
  isFetchingMore: false,
  error: null,
}
