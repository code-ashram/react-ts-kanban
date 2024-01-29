import cn from 'classnames'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import KanbanCard from './components/KanbanCard.tsx'
import { Droppable } from './components/Droppable.tsx'

import styles from './App.module.scss'
import mock from './api/mockData.ts'
import { useEffect, useState } from 'react'
import { Column, Todo } from './models'
import { compareColumns } from './utils'
import { useQueries } from '@tanstack/react-query'
import { getTodos } from './api'
import { Status } from './constants'

const App = () => {
  const [columns, setColumns] = useState<Column[]>(mock)
  const queries = useQueries<Todo[]>({
    queries: [{
      queryKey: ['todo', Status.Todo],
      queryFn: () => getTodos(Status.Todo)
    }, {
      queryKey: ['todo', Status.Todo],
      queryFn: () => getTodos(Status.InProgress)
    }, {
      queryKey: ['todo', Status.Todo],
      queryFn: () => getTodos(Status.Done)
    }]
  })

  useEffect(() => {
    console.log(queries[0].data.)
  }, [queries])

  const onDragEnd = (result: DropResult): void => {
    if (Number.isFinite(result.destination?.index)) setColumns((prevColumns) => {
      const sourceColumn = prevColumns.find((column) => column.id === result.source.droppableId)
      const destinationColumn = prevColumns.find((column) => column.id === result.destination?.droppableId)
      // PATCH

      if (sourceColumn && destinationColumn) {
        const [element] = sourceColumn.todos.splice(result.source.index, 1)
        destinationColumn.todos.splice(result.destination!.index, 0, element)

        return prevColumns.map((column) => compareColumns(column, sourceColumn, destinationColumn))
      }

      return prevColumns
    })
  }

  // useEffect(() => {
  //   fetch('http://localhost:3000/todo?status=1&_sort=order&_start=0&_limit=10')
  //     .then(response => response.json()).then(data => console.log(data))
  // }, [])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={cn(styles.kanbanWrapper)}>
        {columns.map((column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <div>
                <h2 className={cn(styles.columnTitle)}>{column.title}:</h2>
                <ul ref={provided.innerRef} className={cn(styles.kanbanList)} {...provided.droppableProps}>
                  {column.todos.map((todo, index) => (
                    <KanbanCard key={todo.id} id={todo.id} index={index} todo={todo} />
                  ))}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  )
}

export default App
