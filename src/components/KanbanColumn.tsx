import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import cn from 'classnames'

import { Droppable } from './Droppable.tsx'
import KanbanCard from './KanbanCard.tsx'
import SkeletonCard from './SkeletonCard.tsx'
import KanbanButton from './UI/KanbanButton.tsx'

import { getTodos } from '../api'
import { Column } from '../models'

import styles from '../App.module.scss'
import { TOP_VALUE } from './constants.ts'

type Props = {
  column: Column
  isLoading: boolean
  onChange: Dispatch<SetStateAction<Column[]>>
}

const KanbanColumn: FC<Props> = ({ column, isLoading, onChange }) => {
  const queryClient = useQueryClient()
  const [hasMoreTasks, setHasMoreTasks] = useState<boolean>(true)

  const handleLoadMore = () => {
    queryClient
      .fetchQuery({ queryKey: ['todos'], queryFn: () => getTodos(column.id, TOP_VALUE, column.todos.length) })
      .then(data =>
        onChange((prevColumns) => prevColumns.map((currentColumn) => {
          if (data.length < TOP_VALUE) setHasMoreTasks(prevIsVisible => !prevIsVisible)

          return currentColumn.id === column.id
            ? { ...currentColumn, todos: [...currentColumn.todos, ...data] }
            : currentColumn
        })))
      .catch(error => console.log(error))
  }

  return (
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

            {hasMoreTasks && <KanbanButton onClick={handleLoadMore}>Load More</KanbanButton>}
          </div>
        )}
      </Droppable>
    </>
  )
}
export default KanbanColumn
