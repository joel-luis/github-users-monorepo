/**
 * Context types for GitHub Users provider
 */

import type { Dispatch } from "react"
import type { GitHubUsersState } from "./state"
import type { GitHubUsersAction } from "./actions"

export interface GitHubUsersContextValue {
  state: GitHubUsersState
  dispatch: Dispatch<GitHubUsersAction>
}
