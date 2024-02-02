import clsx from 'clsx'

import s from '../Pagination.module.scss'

import { Button } from '../../button/Button'

type PagesProps = {
  currentPage: number | string
  items?: (number | string)[]
  onPageChange: (page: number) => void
}
export const Pages = ({ currentPage, items, onPageChange }: PagesProps) => {
  return (
    <div className={s.pages}>
      {items?.map((page: number | string) => {
        const classNames = {
          root: clsx(s.button, page === currentPage && s.active),
        }

        return (
          <Button
            className={classNames.root}
            disabled={page === '...'}
            key={page}
            onClick={() => onPageChange(+page)}
          >
            {page}
          </Button>
        )
      })}
    </div>
  )
}
