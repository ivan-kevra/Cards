import { Button } from '@/components/ui/button/Button'
import { useState } from 'react'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type Props = {
  currentPage: number
  itemsPerPage: number
  onItemsPerPageChange: (iterm: number) => void
  onPageChange: (page: number) => void
  totalItemsCount: number
}
export const Pagination = ({
  currentPage = 1,
  itemsPerPage = 10,
  onItemsPerPageChange,
  onPageChange,
  totalItemsCount = 100,
}: Props) => {
  const pagesCount = Math.ceil(totalItemsCount / itemsPerPage)
  const pages: Array<number> = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  const portionCount = Math.ceil(pagesCount / itemsPerPage)
  const [portionNumber, setPortionNumber] = useState<number>(1)
  const onPageChanged = (page: number) => {
    onPageChange(page)
  }
  const onSelectChange = (pageCount: number) => {
    onItemsPerPageChange(pageCount)
  }
  const onBackClickHandler = () => setPortionNumber(portionNumber - 1)
  const onForwardClickHandler = () => setPortionNumber(portionNumber + 1)
  const onStartClickHandler = () => setPortionNumber(1)
  const onEndClickHandler = () => setPortionNumber(portionCount)

  const leftPortionPageNumber = (portionNumber - 1) * 10 + 1
  const rightPortionPageNumber = portionNumber * 10

  return (
    <div>
      <button disabled={portionNumber <= 1} onClick={onStartClickHandler}>
        {'<<'}
      </button>
      <button disabled={portionNumber <= 1} onClick={onBackClickHandler}>
        {'<'}
      </button>

      {pages
        .filter((p: number) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((mpage: number, i: number) => {
          return (
            <span
              key={i}
              onClick={() => {
                onPageChanged(mpage)
              }}
            >
              {mpage}
            </span>
          )
        })}
      <button disabled={portionCount <= portionNumber} onClick={onForwardClickHandler}>
        {'>'}
      </button>
      <button disabled={portionCount <= portionNumber} onClick={onEndClickHandler}>
        {'>>'}
      </button>
    </div>
  )
}

// function createArray(startNumber: number, length: number) {
//   return Array.from({ length }, (_, i) => startNumber + i)
// }

// <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//   {createArray(1, data?.pagination?.totalPages ?? 0).map(page => (
//     <Button key={page} onClick={() => setCurrentPage(page)}>
//       {page}
//     </Button>
//   ))}
// </div>
