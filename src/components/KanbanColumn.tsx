import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import cn from 'classnames'

import { Droppable } from './Droppable.tsx'
import KanbanCard from './KanbanCard/KanbanCard.tsx'
import SkeletonCard from './SkeletonCard.tsx'
import KanbanButton from './UI/KanbanButton.tsx'

import { deleteTodo, getTodos, updateTodo } from '../api'
import { Column, Todo } from '../models'
import { TOP_VALUE } from './constants.ts'

import styles from '../App.module.scss'

type Props = {
  column: Column
  isLoading: boolean
  onChange: Dispatch<SetStateAction<Column[]>>
}

const KanbanColumn: FC<Props> = ({ column, isLoading, onChange }) => {
  const queryClient = useQueryClient()
  const [hasMoreTasks, setHasMoreTasks] = useState<boolean>(true)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const handleLoadMore = () => {
    setIsFetching(true)

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
      .finally(() => setIsFetching(false))
  }

  const handleDeleteTask = (todo: Todo) => {
    queryClient
      .fetchQuery({ queryKey: ['todo'], queryFn: () => deleteTodo(todo.id) })
      .then(() =>
        onChange((prevColumns) => prevColumns.map((currentColumn) =>
          currentColumn.id === todo.status
            ? { ...currentColumn, todos: currentColumn.todos.filter((task) => task.id !== todo.id) }
            : currentColumn
        ))
      )
  }

  const handleUpdateTask = (todo: Todo) => {
    queryClient
      .fetchQuery({ queryKey: ['todo'], queryFn: () => updateTodo(todo) })
      .then((todoTask) =>
        onChange((prevColumns) => prevColumns.map((currentColumn) =>
          currentColumn.id === todoTask.status
            ? {
              ...currentColumn, todos: currentColumn.todos.map((task) =>
                task.id === todoTask.id
                  ? todoTask
                  : task
              )
            }
            : currentColumn
        )))
  }

  return (
    <>
      <Droppable droppableId={String(column.id)}>
        {(provided) => (
          <div className={cn(styles.kanbanColumn)}>
            <h2 className={cn(styles.columnTitle)}>{column.title}:</h2>
            <ul ref={provided.innerRef} className={cn(styles.kanbanList)} {...provided.droppableProps}>
              {!isLoading && column.todos?.map((todo, index) =>
                <KanbanCard key={todo.id} id={todo.id} index={index} todo={todo} onDelete={handleDeleteTask}
                            onUpdate={handleUpdateTask} />
              )}

              {(isLoading || isFetching) && new Array(TOP_VALUE).fill(null).map((_, index) =>
                <SkeletonCard key={index} />
              )}

              {provided.placeholder}
            </ul>

            {!isLoading && !isFetching && hasMoreTasks && (
              <KanbanButton onClick={handleLoadMore}>Load More</KanbanButton>
            )}

          </div>
        )}
      </Droppable>
    </>
  )
}
export default KanbanColumn
