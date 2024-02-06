import { useEffect, useState } from 'react'
import cn from 'classnames'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useQueries, UseQueryOptions } from '@tanstack/react-query'

import KanbanColumn from './components/KanbanColumn'

import { getTodos } from './api'
import { InitialColumns, Status } from './constants'
import { Column, Todo } from './models'
import { compareColumns } from './utils'

import styles from './App.module.scss'

const App = () => {
  const [columns, setColumns] = useState<Column[]>(InitialColumns)
  const { data, isLoading } = useQueries(
    {
      queries: Object.entries(Status)
        .filter(([key]) => isNaN(+key))
        .map<UseQueryOptions<Todo[], Error>>(([, value]) => ({
          queryKey: ['todo', value],
          queryFn: () => getTodos(value as Status, 3, 0)
        })),
      combine: (results) => ({
        data: results.map(result => result.data),
        isLoading: results.some(result => result.isLoading)
      })
    }
  )

  useEffect(() => {
    if (data.every((list) => Array.isArray(list)))
      setColumns((prevColumns) => prevColumns.map((column, index) => ({
        ...column,
        todos: data[index] as Todo[]
      })))
  }, [data])

  const onDragEnd = (result: DropResult): void => {
    if (Number.isFinite(result.destination?.index))
      setColumns((prevColumns) => {
        const sourceColumn = prevColumns.find((column) => column.id === Number(result.source.droppableId))
        const destinationColumn = prevColumns.find((column) => column.id === Number(result.destination?.droppableId))
        // PATCH
        if (sourceColumn && destinationColumn) {
          const [element] = sourceColumn.todos.splice(result.source.index, 1)
          destinationColumn.todos.splice(result.destination!.index, 0, element)

          return prevColumns.map((column) => compareColumns(column, sourceColumn, destinationColumn))
        }

        return prevColumns
      })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={cn(styles.kanbanWrapper)}>
        {columns.map((column) => (
          <KanbanColumn key={column.id} column={column} isLoading={isLoading} onChange={setColumns} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default App
