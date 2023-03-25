interface SortOption {
  label: string,
  isModeOn: boolean,
  isUp: boolean
}

export interface SortBy {
  date: SortOption,
  viewsCount: SortOption
}