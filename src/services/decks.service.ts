import { baseApi } from './baseApi'
import {
  CreateDeckArgs,
  GetDeckByIdArgs,
  GetDeckByIdResponse,
  GetDecksArgs,
  GetDecksResponse,
} from './flashcards.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: arg => ({ body: arg, method: 'POST', url: 'v1/decks' }),
      }),
      getDeckById: builder.query<GetDeckByIdResponse, GetDeckByIdArgs>({
        query: ({ id }) => ({ url: `v1/decks/${id}` }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({ params: args ?? {}, url: 'v1/decks' }),
      }),
    }
  },
})

export const { useCreateDeckMutation, useGetDeckByIdQuery, useGetDecksQuery } = decksService
