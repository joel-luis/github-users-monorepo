/**
 * Redux-style action types for GitHub Users reducer
 */

import type { GitHubUser } from './github'

export enum ActionType {
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
  FETCH_USERS_START = 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  FETCH_MORE_START = 'FETCH_MORE_START',
  FETCH_MORE_SUCCESS = 'FETCH_MORE_SUCCESS',
  FETCH_MORE_ERROR = 'FETCH_MORE_ERROR',
  RESET_STATE = 'RESET_STATE',
}

export type SetSearchQueryAction = {
  type: ActionType.SET_SEARCH_QUERY
  payload: string
}

export type FetchUsersStartAction = {
  type: ActionType.FETCH_USERS_START
}

export type FetchUsersSuccessAction = {
  type: ActionType.FETCH_USERS_SUCCESS
  payload: {
    users: GitHubUser[]
    total: number
    page: number
    hasMore: boolean
  }
}

export type FetchUsersErrorAction = {
  type: ActionType.FETCH_USERS_ERROR
  payload: string
}

export type FetchMoreStartAction = {
  type: ActionType.FETCH_MORE_START
}

export type FetchMoreSuccessAction = {
  type: ActionType.FETCH_MORE_SUCCESS
  payload: {
    users: GitHubUser[]
    page: number
    hasMore: boolean
  }
}

export type FetchMoreErrorAction = {
  type: ActionType.FETCH_MORE_ERROR
  payload: string
}

export type ResetStateAction = {
  type: ActionType.RESET_STATE
}

export type GitHubUsersAction =
  | SetSearchQueryAction
  | FetchUsersStartAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | FetchMoreStartAction
  | FetchMoreSuccessAction
  | FetchMoreErrorAction
  | ResetStateAction
