import axios from 'axios'

import { Todo } from '../models'
import { Status } from '../constants'

const BASE_URL = 'http://localhost:3000'

const client = axios.create({
  baseURL: BASE_URL
})

export const getTodos = async (status: Status): Promise<Todo[]> =>
  client.get<Todo[]>(`/todos?status=${status}&_sort=order&_start=0&_limit=10`)
    .then((response) => response.data)

export const getTodo = async (id: string): Promise<Todo> =>
  client.get<Todo>(`/todos/${id}`)
    .then((response) => response.data)

export const createTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> =>
  client.post<Todo>('/todos', todo)
    .then((response) => response.data)

export const deleteTodo = async (id: string): Promise<void> => client.delete(`/todos/${id}`)

export const updateTodo = async (todo: Todo): Promise<Todo> =>
  client.put<Todo>(`/todos/${todo.id}`, todo)
    .then((response) => response.data)

export const patchTodo = async (id: string, payload: Partial<Todo>): Promise<Todo> =>
  client.patch<Todo>(`/todos/${id}`, payload)
    .then((response) => response.data)
