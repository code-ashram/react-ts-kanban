import { FC, ReactNode } from 'react'
import { Button } from '@nextui-org/react'
import cn from 'classnames'

import styles from '../../App.module.scss'

type Props = {
  onClick: () => void
  children: ReactNode
}

const KanbanButton: FC<Props> = ({ children, onClick }) => (
  <Button className={cn(styles.btn, styles.columnBtn)} onClick={onClick} color="primary">
    {children}
  </Button>
)

export default KanbanButton
