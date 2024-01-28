import { Column } from '../models'

export const compareColumns = (column: Column, sourceColumn: Column, destinationColumn: Column): Column => {
  if (column.id === sourceColumn.id) return sourceColumn
  if (column.id === destinationColumn.id) return destinationColumn

  return column
}
