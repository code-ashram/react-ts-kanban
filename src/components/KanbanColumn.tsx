import { Dispatch, FC, SetStateAction } from 'react'
import cn from 'classnames'

import { Droppable } from './Droppable.tsx'
import KanbanCard from './KanbanCard.tsx'

import { Column } from '../models'

import styles from '../App.module.scss'
import SkeletonCard from './SkeletonCard.tsx'
import KanbanButton from './UI/KanbanButton.tsx'
import { useQueryClient } from '@tanstack/react-query'
import { getTodos } from '../api'

type Props = {
  column: Column
  isLoading: boolean
  onChange: Dispatch<SetStateAction<Column[]>>
}

const KanbanColumn: FC<Props> = ({ column, isLoading, onChange }) => {
  const queryClient = useQueryClient()

  const handleLoadMore = () => {
    queryClient
      .fetchQuery({ queryKey: ['todos'], queryFn: () => getTodos(column.id, 2, column.todos.length) })
      .then(data =>
        onChange((prevColumns) => prevColumns.map((currentColumn) =>
          currentColumn.id === column.id
            ? { ...currentColumn, todos: [...currentColumn.todos, ...data] }
            : currentColumn
        )))
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

            <KanbanButton onClick={handleLoadMore}>Load More</KanbanButton>
          </div>
        )}
      </Droppable>
    </>
  )
}
export default KanbanColumn
