export type GetDecksResponse = {
  items: GetDecksResponseItem[]
  maxCardsCount: number
  pagination: GetDecksResponsePagination
}
type GetDecksResponseItem = {
  author: GetDecksResponseItemsAuthor
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
type GetDecksResponseItemsAuthor = {
  id: string
  name: string
}
type GetDecksResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: 'asc' | 'desc'
}
export type GetDeckByIdArgs = {
  id: string
}
export type GetDeckByIdResponse = {
  author?: GetDecksResponseItemsAuthor
  cardsCount: number
  cover: string
  created: string
  id?: string
  isPrivate?: boolean
  name?: string
  updated: string
  userId: string
}
export type CreateDeckArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}
