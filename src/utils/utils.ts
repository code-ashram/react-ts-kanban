import { Column, Todo } from '../models'

export const compareColumns = (column: Column, sourceColumn: Column, destinationColumn: Column): Column => {
  if (column.id === sourceColumn.id) return sourceColumn
  if (column.id === destinationColumn.id) return destinationColumn

  return column
}

export const generateTodo = (): Omit<Todo, 'id'> => ({
  title: '',
  isDone: false,
  priority: 'Mid',
  creationTime: new Date().toISOString(),
  status: 0,
  order: 0
})


