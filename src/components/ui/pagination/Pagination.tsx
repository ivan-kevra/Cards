import { useState } from 'react'

import { Button } from '@/components/ui/button/Button'

import s from './Pagination.module.scss'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type Props = {
  currentPage: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  totalItems: number
  totalPages: number
}
export const Pagination = ({ currentPage, onPageChange, totalPages = 0 }: Props) => {
  const onBackClickHandler = () => onPageChange(currentPage - 1)
  const onForwardClickHandler = () => onPageChange(currentPage + 1)

  return (
    <div className={s.container}>
      <button className={s.arrow} disabled={currentPage <= 1} onClick={onBackClickHandler}>
        {'<'}
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {createArray(1, totalPages ?? 0).map(page => (
          <button
            className={s.pageNumber + ' ' + (page === currentPage ? s.active : '')}
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
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

function createArray(startNumber: number, length: number) {
  return Array.from({ length }, (_, i) => startNumber + i)
}
