import { useGetDecksQuery } from '@/services/baseApi'

export const Decks = () => {
  const { data, isError, isLoading } = useGetDecksQuery()

  return <div>Decks</div>
}
