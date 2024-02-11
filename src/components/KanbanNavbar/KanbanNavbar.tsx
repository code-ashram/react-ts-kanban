import { Dispatch, FC, SetStateAction } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'

import KanbanLogo from './assets/images/KanbanLogo.tsx'
import KanbanForm from '../KanbanForm/KanbanForm.tsx'

import { createTodo } from '../../api'
import { Column, Todo } from '../../models'

type Props = {
  onCreate: Dispatch<SetStateAction<Column[]>>
}

const KanbanNavbar: FC<Props> = ({ onCreate }) => {
  const queryClient = useQueryClient()

  const handleCreateTask = (todo: Omit<Todo, 'id'>) => {
    queryClient
      .fetchQuery({ queryKey: ['todo'], queryFn: () => createTodo(todo) })
      .then(task =>
        onCreate((prevColumns) => prevColumns.map((currentColumn) =>
          currentColumn.id === task.status
            ? { ...currentColumn, todos: [...currentColumn.todos, task] }
            : currentColumn
        ))
      )
  }

  return (
    <Navbar isBordered isBlurred={false}>
      <NavbarBrand>
        <KanbanLogo />
        <p className="font-bold text-inherit">Code Asharam</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <KanbanForm onSubmit={handleCreateTask} />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default KanbanNavbar