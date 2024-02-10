import { Status } from '../../constants'

export enum PRIORITY {
  HIGH = 'High',
  MID = 'Mid',
  LOW = 'Low'
}

export const statuses = [
  {
    label: 'Todo',
    value: Status.Todo
  },
  {
    label: 'In Progress',
    value: Status.InProgress
  },
  {
    label: 'Done',
    value: Status.Done
  }
]

export const priorities = [
  {
    label: PRIORITY.HIGH,
    value: PRIORITY.HIGH
  },
  {
    label: PRIORITY.MID,
    value: PRIORITY.MID
  },
  {
    label: PRIORITY.LOW,
    value: PRIORITY.LOW
  }
]
