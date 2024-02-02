import { clsx } from 'clsx'

import s from './Pagination.module.scss'

import { usePagination } from './usePagination'
import { Typography } from '../typography/Typography'
import { Button } from '../button/Button'

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

  const classNames = {
    arrow: clsx(s.button),
    container: clsx(s.container),
    pages: clsx(s.pages),
  }

  return (
    <div className={classNames.container}>
      <Button className={classNames.arrow} disabled={currentPage <= 1} onClick={onBackClickHandler}>
        {'<'}
      </Button>
      <div className={classNames.pages}>
        {pages()?.map((page: number | string, i: number) => {
          const classNames = {
            root: clsx(s.button, page === currentPage && s.active),
          }

          return (
            <Button
              className={classNames.root}
              disabled={page === '...'}
              key={i}
              onClick={() => onPageChange(+page)}
            >
              {page}
            </Button>
          )
        })}
      </div>
      <Button
        className={classNames.arrow}
        disabled={currentPage >= totalPages}
        onClick={onForwardClickHandler}
      >
        {'>'}
      </Button>
    </div>
  )
}
