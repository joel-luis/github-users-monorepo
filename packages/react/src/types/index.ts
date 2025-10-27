/**
 * Central export point for all types
 */

// GitHub API types
export type {
  GitHubUser,
  GitHubUsersResponse,
  GitHubSearchParams,
} from "./github"

// Action types
export {
  ActionType,
  type SetSearchQueryAction,
  type FetchUsersStartAction,
  type FetchUsersSuccessAction,
  type FetchUsersErrorAction,
  type FetchMoreStartAction,
  type FetchMoreSuccessAction,
  type FetchMoreErrorAction,
  type ResetStateAction,
  type GitHubUsersAction,
} from "./actions"

// State types
export type { GitHubUsersState } from "./state"
export { initialState } from "./state"

// Context types
export type { GitHubUsersContextValue } from "./context"

// Hook types
export type {
  UseInfiniteScrollOptions,
  UseInfiniteScrollReturn,
} from "./hooks"

// Component types
export type {
  AvatarProps,
  SearchBarProps,
  UserCardProps,
  UserGridProps,
  SpinnerProps,
  EmptyStateProps,
} from "./components"
