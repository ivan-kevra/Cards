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
