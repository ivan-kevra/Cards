import { Link } from 'react-router-dom'

import { Table } from '@/components/ui/table/Table'
import { Typography } from '@/components/ui/typography/Typography'
import { useGetDecksQuery } from '@/services/baseApi'

export const Decks2 = () => {
  const { data, error, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return <Typography variant={'h1'}>Loading...</Typography>
  }

  if (error) {
    return (
      <>
        <Typography variant={'h1'}>An error has occured...</Typography>
        <Typography variant={'h3'}>{JSON.stringify(error.data.message)}</Typography>
      </>
    )
  }

  return (
    <div>
      <Typography variant={'h1'}>Decks Page</Typography>
      <Link to={'/'}>DECKS</Link>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Cards</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data?.items?.map(deck => (
            <Table.Row key={deck.id}>
              <Table.Cell>{deck?.name}</Table.Cell>
              <Table.Cell>{deck?.cardsCount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
