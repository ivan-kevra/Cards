import s from './Pagination.module.scss'

import { Button } from '../button/Button'
import { Pages } from './pages/Pages'
import { usePagination } from './usePagination'

type Props = {
  currentPage: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  totalItems?: number
  totalPages?: number
}
export const Pagination = ({
  currentPage,
  itemsPerPage,
  onPageChange,
  totalItems = 0,
  totalPages = 0,
}: Props) => {
  const onBackClickHandler = () => onPageChange(currentPage - 1)
  const onForwardClickHandler = () => onPageChange(currentPage + 1)

  const pages = usePagination({
    currentPage,
    pageSize: itemsPerPage,
    siblingCount: 1,
    totalCount: totalItems,
    totalPageCount: totalPages,
  })

  const items = pages()

  return (
    <div className={s.container}>
      <Button className={s.button} disabled={currentPage <= 1} onClick={onBackClickHandler}>
        {'<'}
      </Button>
      <Pages currentPage={currentPage} items={items} onPageChange={onPageChange} />
      <Button
        className={s.button}
        disabled={currentPage >= totalPages}
        onClick={onForwardClickHandler}
      >
        {'>'}
      </Button>
    </div>
  )
}
