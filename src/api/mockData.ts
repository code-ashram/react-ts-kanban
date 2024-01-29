import { Column, Todo } from "../models"

const todo: Todo[] = [
  {
    "id": "1",
    "title": "Write markup",
    "isDone": true,
    "creationTime": "2023-09-25T08:23:00.000Z",
    "priority": "High",
    "order": 0,
    "status": 0
  },
  {
    "id": "2",
    "title": "Make components",
    "isDone": true,
    "creationTime": "2023-09-27T00:43:00.000Z",
    "priority": "Mid",
    "order": 1,
    "status": 0
  },
  {
    "id": "3",
    "title": "Write code",
    "isDone": false,
    "creationTime": "2023-12-20T14:56:00.000Z",
    "priority": "Low",
    "order": 2,
    "status": 0
  },
  {
    "id": "4",
    "title": "Make code review",
    "isDone": false,
    "creationTime": "2023-12-25T10:10:00.000Z",
    "priority": "High",
    "order": 3,
    "status": 0
  },
  {
    "id": "5",
    "title": "Make code refactoring",
    "isDone": false,
    "creationTime": "2023-12-29T18:17:00.000Z",
    "priority": "Mid",
    "order": 4,
    "status": 0
  },
  {
    "id": "6",
    "title": "Finish the project",
    "isDone": false,
    "creationTime": "2024-01-03T19:48:00.000Z",
    "priority": "Low",
    "order": 5,
    "status": 0
  },
  {
    "id": "7",
    "title": "Write to Kishor",
    "isDone": true,
    "creationTime": "2024-01-04T20:19:00.000Z",
    "priority": "High",
    "order": 6,
    "status": 0
  },
  {
    "id": "8",
    "title": "Make refactoring again",
    "isDone": false,
    "creationTime": "2024-01-05T21:21:00.000Z",
    "priority": "Mid",
    "order": 7,
    "status": 0
  },
  {
    "id": "aYMt86e",
    "title": "Say Hare Krishna!",
    "isDone": true,
    "creationTime": "2024-01-22T15:40:54.990Z",
    "priority": "High",
    "order": 8,
    "status": 0
  }
]

const inProgress: Todo[] = [
  {
    "id": "9",
    "title": "Write markup",
    "isDone": true,
    "creationTime": "2023-09-25T08:23:00.000Z",
    "priority": "High",
    "order": 0,
    "status": 0
  },
  {
    "id": "10",
    "title": "Make components",
    "isDone": true,
    "creationTime": "2023-09-27T00:43:00.000Z",
    "priority": "Mid",
    "order": 1,
    "status": 0
  },
  {
    "id": "11",
    "title": "Write code",
    "isDone": false,
    "creationTime": "2023-12-20T14:56:00.000Z",
    "priority": "Low",
    "order": 2,
    "status": 0
  },
  {
    "id": "12",
    "title": "Make code review",
    "isDone": false,
    "creationTime": "2023-12-25T10:10:00.000Z",
    "priority": "High",
    "order": 3,
    "status": 0
  },
  {
    "id": "13",
    "title": "Make code refactoring",
    "isDone": false,
    "creationTime": "2023-12-29T18:17:00.000Z",
    "priority": "Mid",
    "order": 4,
    "status": 0
  },
  {
    "id": "14",
    "title": "Finish the project",
    "isDone": false,
    "creationTime": "2024-01-03T19:48:00.000Z",
    "priority": "Low",
    "order": 5,
    "status": 0
  },
  {
    "id": "15",
    "title": "Write to Kishor",
    "isDone": true,
    "creationTime": "2024-01-04T20:19:00.000Z",
    "priority": "High",
    "order": 6,
    "status": 0
  },
  {
    "id": "16",
    "title": "Make refactoring again",
    "isDone": false,
    "creationTime": "2024-01-05T21:21:00.000Z",
    "priority": "Mid",
    "order": 7,
    "status": 0
  },
  {
    "title": "Say Hare Krishna!",
    "isDone": true,
    "priority": "High",
    "creationTime": "2024-01-22T15:40:54.990Z",
    "id": "17",
    "order": 8,
    "status": 0
  }
]

const done: Todo[] = [
  {
    "id": "19",
    "title": "Write markup",
    "isDone": true,
    "creationTime": "2023-09-25T08:23:00.000Z",
    "priority": "High",
    "order": 0,
    "status": 0
  },
  {
    "id": "20",
    "title": "Make components",
    "isDone": true,
    "creationTime": "2023-09-27T00:43:00.000Z",
    "priority": "Mid",
    "order": 1,
    "status": 0

  },
  {
    "id": "21",
    "title": "Write code",
    "isDone": false,
    "creationTime": "2023-12-20T14:56:00.000Z",
    "priority": "Low",
    "order": 2,
    "status": 0
  },
  {
    "id": "22",
    "title": "Make code review",
    "isDone": false,
    "creationTime": "2023-12-25T10:10:00.000Z",
    "priority": "High",
    "order": 3,
    "status": 0
  },
  {
    "id": "23",
    "title": "Make code refactoring",
    "isDone": false,
    "creationTime": "2023-12-29T18:17:00.000Z",
    "priority": "Mid",
    "order": 4,
    "status": 0
  },
  {
    "id": "24",
    "title": "Finish the project",
    "isDone": false,
    "creationTime": "2024-01-03T19:48:00.000Z",
    "priority": "Low",
    "order": 5,
    "status": 0
  },
  {
    "id": "25",
    "title": "Write to Kishor",
    "isDone": true,
    "creationTime": "2024-01-04T20:19:00.000Z",
    "priority": "High",
    "order": 6,
    "status": 0
  },
  {
    "id": "26",
    "title": "Make refactoring again",
    "isDone": false,
    "creationTime": "2024-01-05T21:21:00.000Z",
    "priority": "Mid",
    "order": 7,
    "status": 0
  },
  {
    "id": "27",
    "title": "Say Hare Krishna!",
    "isDone": true,
    "priority": "High",
    "creationTime": "2024-01-22T15:40:54.990Z",
    "order": 8,
    "status": 0
  }
]

const mock: Column[] = [
  {
    id: "0",
    title: "Todo",
    todos: todo
  },
  {
    id: "1",
    title: "In Progress",
    todos: inProgress
  },
  {
    id: "2",
    title: "Done",
    todos: done
  }
]

export default mock
