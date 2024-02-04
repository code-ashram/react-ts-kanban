import { FC } from 'react'
import cn from 'classnames'

import { Droppable } from './Droppable.tsx'
import KanbanCard from './KanbanCard.tsx'

import { Column } from '../models'

import styles from '../App.module.scss'
import SkeletonCard from './SkeletonCard.tsx'
import KanbanButton from './UI/KanbanButton.tsx'

type Props = {
  column: Column
  isLoading: boolean
}

const KanbanColumn: FC<Props> = ({ column, isLoading }) => (
  <>
    <Droppable droppableId={String(column.id)}>
      {(provided) => (
        <div className={cn(styles.kanbanColumn)}>
          <h2 className={cn(styles.columnTitle)}>{column.title}:</h2>
          <ul ref={provided.innerRef} className={cn(styles.kanbanList)} {...provided.droppableProps}>
            {!isLoading
              ? column.todos.map((todo, index) => (
                <KanbanCard key={todo.id} id={todo.id} index={index} todo={todo} />
              ))
              : new Array(3).fill(null).map((_, index) => <SkeletonCard key={index} />)
            }

            {provided.placeholder}
          </ul>

          <KanbanButton>Load More</KanbanButton>
        </div>
      )}
    </Droppable>
  </>
)
export default KanbanColumn
