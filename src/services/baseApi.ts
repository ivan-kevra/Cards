import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { GetDecksArgs, GetDecksResponse } from './flashcards.types'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        query: args => {
          return {
            params: args ?? {},
            url: 'v1/decks',
          }
        },
      }),
    }
  },
  reducerPath: 'baseApi',
})

export const { useGetDecksQuery } = baseApi
