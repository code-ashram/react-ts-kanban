import { FC, ReactNode } from 'react'
import { Button } from '@nextui-org/react'
import cn from 'classnames'

import styles from '../../App.module.scss'

type Props = {
  children: ReactNode
}

const KanbanButton: FC<Props> = ({ children }) => (
  <Button color="primary" className={cn(styles.btn, styles.columnBtn)}>
    {children}
  </Button>
)

export default KanbanButton
