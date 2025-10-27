/**
 * Hook-related types
 */

export type UseInfiniteScrollOptions = {
  hasMore: boolean
  isFetching: boolean
  onLoadMore: () => void
  threshold?: number
}

export type UseInfiniteScrollReturn = {
  sentinelRef: (node: HTMLElement | null) => void
}
