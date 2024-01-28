import { Todo } from './todo.ts'

export type Column = {
  id: string
  title: string
  todos: Todo[]
}
