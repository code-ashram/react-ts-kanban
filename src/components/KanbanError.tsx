import { FC, ReactNode } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react'

type Props = {
  onClose: () => void
  children: ReactNode
}

const KanbanError: FC<Props> = ({ onClose, children }) => (
  <>
    <Modal onClose={onClose} isOpen>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Error!</ModalHeader>
            <ModalBody>
              <p>
                {children}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </>
)

export default KanbanError
