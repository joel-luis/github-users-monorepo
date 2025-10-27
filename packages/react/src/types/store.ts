import type { GitHubUser } from "./github"

export type GitHubUsersState = {
  searchQuery: string
  users: GitHubUser[]
  total: number
  page: number
  hasMore: boolean
  isLoading: boolean
  isFetchingMore: boolean
  error: string | null
}

export type GitHubUsersActions = {
  setSearchQuery: (query: string) => void
  fetchNextPage: () => Promise<void>
}

export type GitHubUsersStore = {
  state: GitHubUsersState
  actions: GitHubUsersActions
}
