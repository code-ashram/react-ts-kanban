import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  SelectItem,
  Select,
  useDisclosure
} from '@nextui-org/react'
import cn from 'classnames'
import { FC, FormEvent, useState } from 'react'

import KanbanButton from '../UI/KanbanButton.tsx'
import KanbanPlusIco from '../KanbanNavbar/assets/images/KanbanPlusIco.tsx'

import { priorities, PRIORITY, statuses } from './constants.ts'
import { Todo } from '../../models'
import { generateTodo } from '../../utils'

import styles from '../../App.module.scss'

type OnCreate = (todo: Omit<Todo, 'id'>) => void
type OnUpdate = (todo: Todo) => void

type Props = {
  onSubmit: OnCreate | OnUpdate,
  todo?: Todo
}

const KanbanApp: FC<Props> = ({ onSubmit, todo: task }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [todo, setTodo] = useState<Omit<Todo, 'id'> | Todo>(task || generateTodo)

  const handleChangeTodo = (payload: Partial<Todo>): void => {
    setTodo(prevTodo => ({ ...prevTodo, ...payload }))
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(todo as Todo)
    setTodo(prevTodo => ({ ...prevTodo, title: '' }))
  }

  return (
    <>
      <KanbanButton onClick={onOpen}>
        <KanbanPlusIco />
      </KanbanButton>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmitTodo}>
              <ModalHeader className={`flex flex-col gap-1`}>Add Todo</ModalHeader>
              <ModalBody className={cn(styles.modalForm)}>
                <Input
                  onChange={(e) => handleChangeTodo({ title: e.target.value })}
                  value={todo.title}
                  type="text"
                  label="Title"
                  placeholder="Enter the task"
                  required={true}
                />

                <Select
                  label="Status"
                  placeholder="Choose a status"
                  defaultSelectedKeys={['0']}
                  className="mt-2 max-w"
                  onChange={(e) => handleChangeTodo({ status: Number(e.target.value) })}
                >
                  {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </Select>

                <Select
                  label="Priority"
                  placeholder="Choose a priority"
                  defaultSelectedKeys={[PRIORITY.MID]}
                  className="mt-2 max-w"
                  onChange={(e) => handleChangeTodo({ priority: e.target.value })}
                >
                  {priorities.map((priority) => (
                    <SelectItem key={priority.value} value={priority.value}>
                      {priority.label}
                    </SelectItem>
                  ))}
                </Select>

              </ModalBody>
              <ModalFooter className="justify-start">
                <Button color="danger" onPress={onClose}>
                  Cancel
                </Button>

                <Button color="primary" type="submit">
                  Add
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default KanbanApp
