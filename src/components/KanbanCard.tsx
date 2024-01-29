import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react'
import { Draggable } from 'react-beautiful-dnd'
import { FC } from 'react'
import { Todo } from '../models'

type Props = {
  id: string
  index: number
  todo: Todo
}

const KanbanCard: FC<Props> = ({ id, index, todo }) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">{todo.title}</p>
                <p className="text-small text-default-500">
                  {new Date(todo.creationTime).toLocaleString(
                    'en-US',
                    {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric'
                    }
                  )}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Priority: {todo.priority}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        </li>
      )}
    </Draggable>

  )
}

export default KanbanCard
