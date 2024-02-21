import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react'
import { FC } from 'react'

type Props = {
  onEdit: () => void
  onDelete: () => void
}

const KanbanPopover: FC<Props> = ({ onEdit, onDelete }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          &#8942;
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Action event example"
      >
        <DropdownItem onClick={onEdit}>Edit card</DropdownItem>
        <DropdownItem className="text-danger" color="danger" onClick={onDelete}>Delete card</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default KanbanPopover

