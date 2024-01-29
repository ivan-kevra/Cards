import { useState } from 'react'

import { Button } from '@/components/ui/button/Button'
import { Header } from '@/components/ui/header/Header'
import { Table } from '@/components/ui/table/Table'
import { Tabs } from '@/components/ui/tabs/Tabs'
import { TextField } from '@/components/ui/textField/TextField'
import { Typography } from '@/components/ui/typography/Typography'
import {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
} from '@/services/decks.service'

import s from './Decks.module.scss'
import { Slider } from '@/components/ui/slider/Slider'

export const Decks = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading } = useGetDecksQuery({ currentPage, itemsPerPage: 10 })
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: 'clrtrh14d0447y42wry0hf2wy' })

  const [createDeck, deckCreationStatus] = useCreateDeckMutation()

  console.log(deckCreationStatus)

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
    <div className={s.container}>
      <Header isLoggedIn />
      <div className={s.content}>
        <div className={s.header}>
          <Typography variant={'h1'}>Decks list</Typography>
          <Button
            disabled={deckCreationStatus.isLoading}
            onClick={() => createDeck({ name: 'new Deck 1' })}
          >
            Add new Deck
          </Button>
        </div>

        <div className={s.menu}>
          <TextField type={'search'} />
          <Tabs
            tabs={[
              { title: 'My Cards', value: '1' },
              { title: 'All Cards', value: '1' },
            ]}
          />
          <Slider />
        </div>

        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Cards</Table.HeadCell>
              <Table.HeadCell>Last updated</Table.HeadCell>
              <Table.HeadCell>Created by</Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {data?.items?.map(deck => (
              <Table.Row key={deck.id}>
                <Table.Cell>{deck?.name}</Table.Cell>
                <Table.Cell>{deck?.cardsCount}</Table.Cell>
                <Table.Cell>{new Date(deck?.updated).toLocaleDateString()}</Table.Cell>
                <Table.Cell>{deck?.author.name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {createArray(1, data?.pagination?.totalPages ?? 0).map(page => (
            <Button key={page} onClick={() => setCurrentPage(page)}>
              {page}
            </Button>
          ))}
        </div> */}
      </div>
    </div>
  )
}

function createArray(startNumber: number, length: number) {
  return Array.from({ length }, (_, i) => startNumber + i)
}