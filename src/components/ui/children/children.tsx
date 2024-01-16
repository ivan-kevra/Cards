import { ReactNode } from 'react'

type AvatarProps = {
  person: {
    imageId: string
    name: string
  }
  size: number
}

const Avatar = ({ person, size }: AvatarProps) => {
  return <img alt={person.name} className={'avatar'} height={size} src={'qwe'} width={size} />
}

type CardProps = {
  children: ReactNode
}
function Card({ children }: CardProps) {
  return <div className={'card'}>{children}</div>
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        person={{
          imageId: 'YfeOqp2',
          name: 'Katsuko Saruhashi',
        }}
        size={100}
      />
    </Card>
  )
}
