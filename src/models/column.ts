import { Todo } from './todo.ts'
import { Status } from '../constants'

export type Column = {
  id: Status
  title: string
  todos: Todo[]
}
