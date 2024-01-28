import { Status } from '../constants'

export type Todo = {
  id: string
  title: string
  isDone: boolean
  creationTime: string
  priority: string
  order: number
  status: Status
}
