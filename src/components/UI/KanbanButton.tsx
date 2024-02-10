import { FC, ReactNode } from 'react'
import { Button } from '@nextui-org/react'
import cn from 'classnames'

import styles from '../../App.module.scss'

type Props = {
  onClick: () => void
  children: ReactNode
  buttonType?: 'button' | 'submit' | 'reset' | undefined,
}

const KanbanButton: FC<Props> = ({buttonType = 'button', children, onClick }) => (
  <Button type={buttonType} className={cn(styles.btn)} onClick={onClick} color="primary">
    {children}
  </Button>
)

export default KanbanButton
