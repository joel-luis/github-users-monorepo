/**
 * GitHub API related types
 */

export type GitHubUser = {
  id: number
  login: string
  avatar_url: string
  html_url: string
  type: string
  score: number
}

export type GitHubUsersResponse = {
  data: GitHubUser[]
  total: number
  hasMore: boolean
  nextPage: number
}

export type GitHubSearchParams = {
  query: string
  page?: number
  perPage?: number
}
