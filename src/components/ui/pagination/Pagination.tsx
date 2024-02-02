import s from './Pagination.module.scss'

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

  // console.log(pages)

  return (
    <div className={s.container}>
      <button className={s.arrow} disabled={currentPage <= 1} onClick={onBackClickHandler}>
        {'<'}
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pages()?.map((page: number | string, i: number) => {
          return (
            <button
              className={s.pageNumber + ' ' + (page === currentPage ? s.active : '')}
              key={i}
              onClick={() => onPageChange(+page)}
            >
              {page}
            </button>
          )
        })}
      </div>
      <button
        className={s.arrow}
        disabled={currentPage >= totalPages}
        onClick={onForwardClickHandler}
      >
        {'>'}
      </button>
    </div>
  )
}
