import { Column, Todo } from '../models'

const todo: Todo[] = [
  {
    'id': '1',
    'title': 'Write markup',
    'isDone': true,
    'creationTime': '2023-09-25T08:23:00.000Z',
    'priority': 'High',
    'order': 0
  },
  {
    'id': '2',
    'title': 'Make components',
    'isDone': true,
    'creationTime': '2023-09-27T00:43:00.000Z',
    'priority': 'Mid',
    'order': 1
  },
  {
    'id': '3',
    'title': 'Write code',
    'isDone': false,
    'creationTime': '2023-12-20T14:56:00.000Z',
    'priority': 'Low',
    'order': 2
  },
  {
    'id': '4',
    'title': 'Make code review',
    'isDone': false,
    'creationTime': '2023-12-25T10:10:00.000Z',
    'priority': 'High',
    'order': 3
  },
  {
    'id': '5',
    'title': 'Make code refactoring',
    'isDone': false,
    'creationTime': '2023-12-29T18:17:00.000Z',
    'priority': 'Mid',
    'order': 4
  },
  {
    'id': '6',
    'title': 'Finish the project',
    'isDone': false,
    'creationTime': '2024-01-03T19:48:00.000Z',
    'priority': 'Low',
    'order': 5
  },
  {
    'id': '7',
    'title': 'Write to Kishor',
    'isDone': true,
    'creationTime': '2024-01-04T20:19:00.000Z',
    'priority': 'High',
    'order': 6
  },
  {
    'id': '8',
    'title': 'Make refactoring again',
    'isDone': false,
    'creationTime': '2024-01-05T21:21:00.000Z',
    'priority': 'Mid',
    'order': 7
  },
  {
    'title': 'Say Hare Krishna!',
    'isDone': true,
    'priority': 'High',
    'creationTime': '2024-01-22T15:40:54.990Z',
    'id': 'aYMt86e',
    'order': 8
  }
]

const inProgress: Todo[] = [
  {
    'id': '9',
    'title': 'Write markup',
    'isDone': true,
    'creationTime': '2023-09-25T08:23:00.000Z',
    'priority': 'High',
    'order': 0
  },
  {
    'id': '10',
    'title': 'Make components',
    'isDone': true,
    'creationTime': '2023-09-27T00:43:00.000Z',
    'priority': 'Mid',
    'order': 1
  },
  {
    'id': '11',
    'title': 'Write code',
    'isDone': false,
    'creationTime': '2023-12-20T14:56:00.000Z',
    'priority': 'Low',
    'order': 2
  },
  {
    'id': '12',
    'title': 'Make code review',
    'isDone': false,
    'creationTime': '2023-12-25T10:10:00.000Z',
    'priority': 'High',
    'order': 3
  },
  {
    'id': '13',
    'title': 'Make code refactoring',
    'isDone': false,
    'creationTime': '2023-12-29T18:17:00.000Z',
    'priority': 'Mid',
    'order': 4
  },
  {
    'id': '14',
    'title': 'Finish the project',
    'isDone': false,
    'creationTime': '2024-01-03T19:48:00.000Z',
    'priority': 'Low',
    'order': 5
  },
  {
    'id': '15',
    'title': 'Write to Kishor',
    'isDone': true,
    'creationTime': '2024-01-04T20:19:00.000Z',
    'priority': 'High',
    'order': 6
  },
  {
    'id': '16',
    'title': 'Make refactoring again',
    'isDone': false,
    'creationTime': '2024-01-05T21:21:00.000Z',
    'priority': 'Mid',
    'order': 7
  },
  {
    'title': 'Say Hare Krishna!',
    'isDone': true,
    'priority': 'High',
    'creationTime': '2024-01-22T15:40:54.990Z',
    'id': '17',
    'order': 8
  }
]

const done: Todo[] = [
  {
    'id': '19',
    'title': 'Write markup',
    'isDone': true,
    'creationTime': '2023-09-25T08:23:00.000Z',
    'priority': 'High',
    'order': 0
  },
  {
    'id': '20',
    'title': 'Make components',
    'isDone': true,
    'creationTime': '2023-09-27T00:43:00.000Z',
    'priority': 'Mid',
    'order': 1

  },
  {
    'id': '21',
    'title': 'Write code',
    'isDone': false,
    'creationTime': '2023-12-20T14:56:00.000Z',
    'priority': 'Low',
    'order': 2
  },
  {
    'id': '22',
    'title': 'Make code review',
    'isDone': false,
    'creationTime': '2023-12-25T10:10:00.000Z',
    'priority': 'High',
    'order': 3
  },
  {
    'id': '23',
    'title': 'Make code refactoring',
    'isDone': false,
    'creationTime': '2023-12-29T18:17:00.000Z',
    'priority': 'Mid',
    'order': 4
  },
  {
    'id': '24',
    'title': 'Finish the project',
    'isDone': false,
    'creationTime': '2024-01-03T19:48:00.000Z',
    'priority': 'Low',
    'order': 5
  },
  {
    'id': '25',
    'title': 'Write to Kishor',
    'isDone': true,
    'creationTime': '2024-01-04T20:19:00.000Z',
    'priority': 'High',
    'order': 6
  },
  {
    'id': '26',
    'title': 'Make refactoring again',
    'isDone': false,
    'creationTime': '2024-01-05T21:21:00.000Z',
    'priority': 'Mid',
    'order': 7
  },
  {
    'id': '27',
    'title': 'Say Hare Krishna!',
    'isDone': true,
    'priority': 'High',
    'creationTime': '2024-01-22T15:40:54.990Z',
    'order': 8
  }
]

const mock: Column[] = [
  {
    id: '0',
    title: 'Todo',
    todos: todo
  },
  {
    id: '1',
    title: 'In Progress',
    todos: inProgress
  },
  {
    id: '2',
    title: 'Done',
    todos: done
  }
]

export default mock
