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

import KanbanButton from '../UI/KanbanButton.tsx'
import KanbanPlusIco from '../KanbanNavbar/assets/images/KanbanPlusIco.tsx'

import { priorities, PRIORITY, statuses } from './constants.ts'

import styles from '../../App.module.scss'

const KanbanApp = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <KanbanButton onClick={onOpen}>
        <KanbanPlusIco />
      </KanbanButton>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={`flex flex-col gap-1`}>Add Todo</ModalHeader>
              <ModalBody className={cn(styles.modalForm)}>
                <form action="">
                  <Input type="email" label="Title" placeholder="Enter the task" required={true}/>

                  <Select
                    label="Status"
                    placeholder="Choose a status"
                    defaultSelectedKeys={["0"]}
                    className="mt-2 max-w"
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
                  >
                    {priorities.map((priority) => (
                      <SelectItem key={priority.value} value={priority.value}>
                        {priority.label}
                      </SelectItem>
                    ))}
                  </Select>
                </form>
              </ModalBody>
              <ModalFooter className="justify-start">
                <Button color="danger" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default KanbanApp
